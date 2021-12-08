function showSalary(users, age) {
  let approved = users.filter((item) => item.age <= age);
  let result = "";
  approved.map((item, index) => {
    if (index > 0){
      result = result + `\n`;
    }
  result = result + `${item.name}, ${item.balance}`;
  });
return result;
}
