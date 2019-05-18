const empSection = document.querySelector("#employment > table > tbody");
const pubSection = document.querySelector("#publications table tbody");
fetch("../data/data.json")
  .then(data => data.json())
  .then(data => {
    const emp = data.employment;
    const pub = data.publications;
    const empHTML = emp
      .map((v, i) => {
        return `
      <tr>
          <th scope="row">${i + 1}</th>
          <td>${v.job}</td>
          <td>${v.from}</td>
          <td>${v.to}</td>
      </tr>
      `;
      })
      .join("");

    const pubHTML = pub
      .map((v, i) => {
        return `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${v.title}</td>
      </tr>
      `;
      })
      .join("");
    empSection.innerHTML = empHTML;
    pubSection.innerHTML = pubHTML;
  });
