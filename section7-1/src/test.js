function lpad(value, len, padValue, type) {
  if (type === undefined) type = 1;
  if (padValue === undefined) padValue = " ";
  if (type == 1) {
    return padValue.repeat(len - value.length) + value;
  } else if (type === 2) {
    //한글 2바이트계산
    let tempValue = "";
    len -= getBytes(value);
    loop1: while (len > 0) {
      for (let p of padValue.split("")) {
        if (getBytes(p) > len) break loop1;
        tempValue = tempValue + p;
        len -= getBytes(p);
      }
    }
    return tempValue + value;
  }
}

function rpad(value, len, padValue, type) {
  if (type === undefined) type = 1;
  if (padValue === undefined) padValue = " ";
  if (type == 1) {
    return padValue.repeat(len - value.length) + value;
  } else if (type === 2) {
    //한글 2바이트계산
    let tempValue = "";
    len -= getBytes(value);
    loop1: while (len > 0) {
      for (let p of padValue.split("")) {
        if (getBytes(p) > len) break loop1;
        tempValue = tempValue + p;
        len -= getBytes(p);
      }
    }
    return value + tempValue;
  }
}

function getBytes(value) {
  const regExp = /[ㄱ-하-ㅣ가-힣]/g;
  let cnt = 0;
  for (let i = 0; i < value.length; i++) {
    cnt += regExp.test(value[i]) ? 2 : 1;
  }
  return cnt;
}
