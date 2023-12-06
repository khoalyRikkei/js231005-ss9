import data1, { number } from "../../../utils/repository.util.js";

export class RegisterService {
  onRegister() {
    alert("Đăng ký thành công");
  }

  renderProduct(element) {
    const data = ["Phúc", "Bình", "Tiến", "Tuấn", "Hiếu", "Viễn"];

    const html = data.map((item) => `<li>${item}</li>`).join("");

    element.innerHTML = html;

    console.log("Kiểm tra data", data1);
    console.log("Kiểm tra data", number);
  }
}
