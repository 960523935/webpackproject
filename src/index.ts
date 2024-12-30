import getUserInfo from "@/home";

const index = () => {
  const res = getUserInfo();
  console.log("res=======>", res);
  window.rrr = res;
  document.querySelector("h1")!.innerHTML = res.name;
};

index();
