const empSection = document.querySelector("#employment > table > tbody");
const pubSection = document.querySelector("#publications table tbody");

const emp = data.employment;
const pub = data.publications;
const empHTML = emp
  .map((v, i) => {
    return `
      <tr>
          <th scope="row">${i + 1}</th>
          <td>
          <span class="font-weight-bold">${v.job}</span> </br>
          ${v.institution}
          </td>
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
