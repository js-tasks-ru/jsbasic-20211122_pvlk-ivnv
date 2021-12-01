function sumSalary(salaries) 
{

    let sumOfSalaries = 0;
    for (let key in salaries)
    {
        let isSalary = typeof salaries[key];
        if (isSalary == "number" && Number.isFinite(salaries[key]))
        {
            sumOfSalaries += salaries[key];
        }
    }
    return sumOfSalaries;
}
sumSalary(salaries);