export function isNumber(text) {
  let result = false;
  for (let i = 0; i < text.length; i++) {
    // console.log("text.charAt["+i+"]", text.charAt(i));
    // console.log("isNaN: ", isNaN(text.charAt(i)));
    if (text.charAt(i) === "" || text.charAt(i) === " ") {
      result = false;
    } else {
      if (isNaN(text.charAt(i)) === false) {
        result = true;
        break;
      }
    }
  }
  return result;
}

export function validationText(text, minLength, required) {
  // console.log("[VALIDATION]validationText("+ text +", "+ minLength +")");
  if (text === "") {
    // console.log("==validationText == null");
    if (required === true) {
      return {
        flag: false,
        message: "This field cannot be null!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else if (text !== "") {
    // console.log("==validationText != null");
    // console.log("isNumber: ", this.isNumber(text) + "   minLength: ", text.minLength);
    if (isNumber(text) === true) {
      // console.log("- isNaN(text");
      return {
        flag: false,
        message: "This field cannot filled with number!"
      };
    } else if (isNumber(text) === false && text.length < minLength) {
      // console.log("- isNaN(text) < 4");
      return {
        flag: false,
        message: `This field must be filled at least ${minLength} character`
      };
    } else {
      // console.log("- else");
      return {
        flag: true,
        message: ""
      };
    }
  }
  // console.log("--------------------validationText");
}

export function validationUniqeText(text, minLength, required) {
  if (text === "") {
    // console.log("==validationText == null");
    if (required === true) {
      return {
        flag: false,
        message: "This field cannot be null!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else if (text !== "") {
    // console.log("==validationText != null");
    // console.log("isNumber: ", this.isNumber(text) + "   minLength: ", text.minLength);
    if (text.length < minLength) {
      // console.log("- isNaN(text) < 4");
      return {
        flag: false,
        message: `This field must be filled at least ${minLength} character`
      };
    } else {
      // console.log("- else");
      return {
        flag: true,
        message: ""
      };
    }
  }
}

export function validationNumber(data, minLength, required) {
  // console.log("[VALIDATION]validationNumber("+ data +", "+ minLength +")");
  if (data === "") {
    // console.log("validationNumber null");
    if (required === true) {
      return {
        flag: false,
        message: "This field cannot be null!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else if (data !== "") {
    // console.log("validationNumber not null: ", isNaN(data));
    if (isNaN(data) === true) {
      // console.log("validationNumber isNaN(data");
      return {
        flag: false,
        message: "This field cannot filled with alpha!"
      };
    } else if (isNaN(data) !== true && data.length < minLength) {
      // console.log("validationNumber isNaN(data) < 4");
      return {
        flag: false,
        message: `This field must be filled at least ${minLength} character`
      };
    } else {
      // console.log("!= null else");
      return {
        flag: true,
        message: ""
      };
    }
  }
}

export function validationEmail(email, minLength, required) {
  if (email === "") {
    if (required === true) {
      return {
        flag: false,
        message: "This field cannot be null!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else if (email !== "") {
    const regex = /.+@.+\.[A-Za-z]+$/;
    if (!regex.test(email)) {
      return {
        flag: false,
        message: "The input you entered is incorrect!"
      };
    } else if (!regex.test(email) && email.length < minLength) {
      return {
        flag: false,
        message: `This name must be filled at least ${minLength} character`
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  }
}

export function validationDate(date, required) {
  // console.log("[formUtils]validationDate("+date+", "+required+")");
  let temptDate =
    date === "" ? toDateStringAlphaMonthFormater(new Date()) : date;
  if (required === true) {
    // console.log("toDateStringFormater: ", toDateStringFormater(new Date()));
    if (temptDate === toDateStringAlphaMonthFormater(new Date())) {
      return {
        flag: false,
        message: "Please change date, this field cannot be null!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else {
    return {
      flag: true,
      message: ""
    };
  }
}

export function toDateStringFormater(stringDate) {
  // console.log("[formUtils]toDateStringFormater: ", stringDate);
  let year = stringDate.substr(0, 4);
  let month = +stringDate.substr(5, 2) - 1;
  let day = stringDate.substr(8, 2);

  // console.log(`== result: year[${year}] month[${month}] day[${day}]`);

  let newDate = new Date(year, month, day);
  return newDate;
}

export function toDateStringAlphaMonthFormater(dateFormat) {
  // console.log("[DatePicker]toDateStringAlphaMonthFormater date: ", dateFormat);

  let month = dateFormat.getMonth();
  let date = dateFormat.getDate();
  let year = dateFormat.getFullYear();

  if (month === 0) {
    month = "Januari";
  } else if (month === 1) {
    month = "Februari";
  } else if (month === 2) {
    month = "Maret";
  } else if (month === 3) {
    month = "April";
  } else if (month === 4) {
    month = "Mei";
  } else if (month === 5) {
    month = "Juni";
  } else if (month === 6) {
    month = "Juli";
  } else if (month === 7) {
    month = "Agustus";
  } else if (month === 8) {
    month = "September";
  } else if (month === 9) {
    month = "Oktober";
  } else if (month === 10) {
    month = "November";
  } else if (month === 11) {
    month = "Desember";
  }

  if (date < 10) {
    date = `0${date}`;
  }

  // console.log("result: "+ date + " " + month + " " + year);
  return date + " " + month + " " + year;
}

export function toDateStringFormaterWithSlash(dateFormat) {
  // console.log("[DatePicker]toDateFormat date: ", dateFormat);

  let month = dateFormat.getMonth() + 1;
  let date = dateFormat.getDate();
  let year = dateFormat.getFullYear();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  // console.log("result: "+ date + " " + month + " " + year);
  return year + "-" + month + "-" + date;
}

export function toStringDateFormater(stringDate) {
  // console.log("[formutils]toStringDateFormater("+stringDate+")");
  if (stringDate !== "") {
    let tempDay = Math.floor(stringDate.substring(0, 2));
    // console.log("==tempDay: ", tempDay);

    let tempMonth = "";
    let tempIndex = 0;
    for (let i = 0; i < stringDate.length; i++) {
      if (i !== stringDate.length) {
        if (
          isNaN(stringDate.substring(i, i + 1)) === true &&
          stringDate.substring(i, i + 1) !== " "
        ) {
          tempMonth += stringDate.substring(i, i + 1);
          tempIndex = i;
        }
      }
    }
    // console.log("===tempMonth: ", tempMonth);
    // console.log("===tempIndex: ", tempIndex);

    let tempYear = Math.floor(
      stringDate.substring(tempIndex + 2, stringDate.length)
    );
    // console.log("===tempYear: ", tempYear);

    let month;
    if (tempMonth === "Januari") {
      month = 0;
    } else if (tempMonth === "Februari") {
      month = 1;
    } else if (tempMonth === "Maret") {
      month = 2;
    } else if (tempMonth === "April") {
      month = 3;
    } else if (tempMonth === "Mei") {
      month = 4;
    } else if (tempMonth === "Juni") {
      month = 5;
    } else if (tempMonth === "Juli") {
      month = 6;
    } else if (tempMonth === "Agustus") {
      month = 7;
    } else if (tempMonth === "September") {
      month = 8;
    } else if (tempMonth === "Oktober") {
      month = 9;
    } else if (tempMonth === "November") {
      month = 10;
    } else if (tempMonth === "Desember") {
      month = 11;
    }
    // console.log("==month: ", month);

    // console.log("==result: ", new Date(tempYear, month, tempDay));
    return new Date(tempYear, month, tempDay);
  } else {
    return new Date();
  }
}

export function validationSelect(selectValue, required) {
  if (required === true) {
    if (selectValue === "") {
      return {
        flag: false,
        message: "This field cannot be null"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else {
    return {
      flag: true,
      message: ""
    };
  }
}

export function validationTextArea(value, minLength, required) {
  if (required === true) {
    if (value === "") {
      return {
        flag: false,
        message: "This field cannot be null"
      };
    }
    if (value !== "" && value.length < minLength) {
      return {
        flag: false,
        message: `This field must be filled at least ${minLength} character`
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else {
    return {
      flag: true,
      message: ""
    };
  }
}

export function validationImgTaken(toogleSuccess, required) {
  if (required === true) {
    if (toogleSuccess === false) {
      return {
        flag: false,
        message: "This field cannot be null!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else {
    return {
      flag: true,
      message: ""
    };
  }
}

export function validatorFileExtention(file, fileCanToUpload) {
  //file = file blob
  //fileCanToUpload = ['.pdf', '.jpg']

  let result = false;

  if (file !== "") {
    let fileName = file.name;
    let fileExtention = "";
    let getDot = 0;

    for (let index = 0; index < fileName.length; index++) {
      if (fileName.substring(index, index + 1) === ".") {
        getDot = index;
      }
    }

    fileExtention = fileName.substring(getDot, fileName.length);
    console.log(
      "[formUtils]validatorFileExtention fileExtention: ",
      fileExtention
    );

    for (let index = 0; index < fileCanToUpload.length; index++) {
      console.log(
        "fileCanToUpload[" +
          index +
          "]: " +
          fileCanToUpload[index] +
          "  fileExtention: ",
        fileExtention.toLowerCase()
      );
      if (fileCanToUpload[index] === fileExtention.toLowerCase()) {
        result = true;
        break;
      }
    }

    console.log("===result: ", result);
    return result;
  } else {
    console.log("[formUtils]file NOT FOUND");
    return result;
  }
}

export function validatorFileType(file, fileCanToUpload) {
  let isValid = Boolean;
  const listValidator = fileCanToUpload;

  for (let i = 0; i < listValidator.length; i++) {
    if (file.type === listValidator[i]) {
      isValid = true;
      break;
    } else {
      isValid = false;
    }
  }

  return isValid;
}

export function validationFile(
  toogleSuccess,
  required,
  onSelectedFlag,
  file,
  fileTypeCanBeUpload
) {
  if (required === true) {
    if (file === "" && onSelectedFlag === false) {
      return {
        flag: false,
        message: "This field cannot be null!"
      };
    } else if (file !== "" && onSelectedFlag === true) {
      if (validatorFileType(file, fileTypeCanBeUpload) === true) {
        return {
          flag: true,
          message: ""
        };
      } else {
        return {
          flag: false,
          message: "File selected must be pdf format"
        };
      }
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else {
    return {
      flag: true,
      message: ""
    };
  }
}

export function validationCheckBox(checked, required) {
  if (required === true) {
    if (checked === false) {
      return {
        flag: false,
        message: "This agreement must be check!"
      };
    } else {
      return {
        flag: true,
        message: ""
      };
    }
  } else {
    return {
      flag: true,
      message: ""
    };
  }
}

export function addErrorField(formClassName) {
  removeErrorField(formClassName);
  let labelElement = document.querySelector(`.${formClassName}`);
  labelElement.className += " error-field";
}

export function removeErrorField(formClassName) {
  let labelElement = document.querySelector(`.${formClassName}`);
  labelElement.classList.remove("error-field");
}

export function formToDisable(role, formClassName, formFlag) {
  // console.log("formClassName: ", formClassName);
  if (role === "recruiter" || role === "leader") {
    return true;
  } else if (role === "notif") {
    if (formFlag === true) {
      setTimeout(() => {
        removeErrorField(formClassName);
      }, 50);
      return true;
    } else {
      setTimeout(() => {
        addErrorField(formClassName);
      }, 50);
      return false;
    }
  } else {
    return false;
  }
}
