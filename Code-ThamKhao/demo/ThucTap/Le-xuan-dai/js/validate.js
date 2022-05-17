function Validator(options) {
  // Hàm Validate
  function validate(inputElement, rule) {
    //tìm đến element chwuas message thông báo validate
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelecter
    );
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = " ";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  //lấy elements của form cần validate
  var formElement = document.querySelector(options.form);
  console.log(options.rules);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        //xử lí click ngoài trường
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelecter
          );
          errorElement.innerText = " ";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
//Định nghĩa rules
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập tên!";
    },
  };
};
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Vui lòng nhập email !";
    },
  };
};
Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập mật khẩu tối thiểu ${min} ký tự`;
    },
  };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không khớp !";
    },
  };
};
