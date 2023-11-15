const resetLocalStorase = document.getElementById("resetLocalStorase");
const budgetValue = document.getElementById("budget-value");
const btnValculate = document.getElementById("btn-calculate");
const expenseValue = document.getElementById("expense-value");
const expenseAmountValue = document.getElementById("expenseAmount-value");
const btnAddExpense = document.getElementById("btn-addexpense");
const budgetValueDisplay = document.getElementById("budgetValue");
const expenseValueDisplay = document.getElementById("expenseValue");
const balanceValueDisplay = document.getElementById("balanceValue");
const notification = document.querySelector(".notification");
const info = document.querySelector(".info");


function condition() {
  info.textContent = "";
  if (
    budgetValue.value === "" ||
    budgetValue.value <= 0 ||
    budgetValue.value === "e"
  ) {
    notification.style.display = "block";
    info.textContent =
      "Veuillez remplir le champ d abbord avec un nombre valide";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  } else {
    notification.style.display = "block";
    info.textContent = "Budget ajouter avec succès";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
}
function ajout() {
  const ajoutBudgetBalance = JSON.parse(localStorage.getItem("data"));
  budgetValueDisplay.textContent = ajoutBudgetBalance.budged + ' F';
  balanceValueDisplay.textContent = ajoutBudgetBalance.balance + ' F';
}
ajout();
/*LocalStorase*/
let valeur = {
  budged: "00",
  expense: "00",
  balance: "00",
};
// Vérification de la présence des données dans le stockage local
if (!localStorage.getItem("data")) {
  localStorage.setItem("data", JSON.stringify(valeur));
}
let tabTout = JSON.parse(localStorage.getItem("data"));
/*les evenement*/

btnValculate.addEventListener("click", () => {
  valeur = {
    budged: Number(tabTout.budged) + Number(budgetValue.value),
    expense: Number(tabTout.expense),
    balance: Number(tabTout.balance) + Number(budgetValue.value),
  };
  localStorage.setItem("data", JSON.stringify(valeur));
  condition();
  ajout();
});
function ajoutExp() {
    const ajoutBudgetBalance = JSON.parse(localStorage.getItem("data"));
    expenseValueDisplay.textContent = ajoutBudgetBalance.expense + ' F';
    balanceValueDisplay.textContent = ajoutBudgetBalance.balance;
  }
  ajoutExp();
  /*Second localStorase*/
  let tabVide =JSON.parse(localStorage.getItem("dataExpense")) || [];
  
// Vérification de la présence des données dans le stockage local
if (!localStorage.getItem("dataExpense")) {
  localStorage.setItem("dataExpense", JSON.stringify(tabVide));
}
let listExpense = JSON.parse(localStorage.getItem("dataExpense")) || [];
btnAddExpense.addEventListener("click", (e) => {
  e.preventDefault();
    valeur = {
        budged: Number(tabTout.budged) + Number(budgetValue.value),
        expense: Number(tabTout.expense) + Number(expenseAmountValue.value),
        balance: Number(tabTout.balance) + (Number(budgetValue.value) - Number(expenseAmountValue.value)),
      };
      localStorage.setItem("data", JSON.stringify(valeur));
      tabVide.push({
        expenseTitle: expenseValue.value, 
        expenseMontant: expenseAmountValue.value
    });
      localStorage.setItem("dataExpense", JSON.stringify(tabVide));
  condition2();
  ajoutExp();
  expenseValue.value = '';
  expenseAmountValue.value = '';
});
function condition2() {
  if (
    expenseValue.value === "" ||
    expenseAmountValue.value === "" ||
    expenseAmountValue.value <= 0 ||
    expenseAmountValue.value === "e"
  ) {
    notification.style.display = "block";
    info.textContent =
      "Veuillez remplir les champs d abbord avec un nombre valide";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
  else{
    notification.style.display = "block";
    info.textContent = "Expense ajouter avec succès";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
}
/*La fonctionnalité du bouton reset*/
resetLocalStorase.addEventListener("click", () => {
  // Effacez les données du stockage local et rechargez la page
  localStorage.clear();
  document.location.reload();
});

const listDesDepense = document.querySelector('.listDesDepense');
function recuperation() {
  let listExpense = JSON.parse(localStorage.getItem("dataExpense"));
  console.log('type objectFit: ', typeof(listExpense));
  
  listExpense.forEach((element, index) => {
    console.log(element);
    const divListe = document.createElement('div');
    divListe.classList.add('listTitleElement');
    divListe.innerHTML += `<span>${index +1}</span>
    <span class="">${element.expenseTitle}</span>
  <span class="">${element.expenseMontant} F</span>
  <span class="" style="display: flex; justify-content: end;">
      <span id="edit-boutton"><i class="fa-solid fa-pen-to-square" style="color: rgba(0, 255, 60, 0.869); font-size: 18px;"></i></span>
      <span id="delet-boutton"><i class="fa-solid fa-trash" style="color: red; font-size: 18px;"></i></span>
  </span> </br>`;
  listDesDepense.appendChild(divListe);
  });
  //location.reload();
}
recuperation();
const essai = document.querySelector('.essai');
function recuperationHistorique() {
  let listExpense = JSON.parse(localStorage.getItem("dataExpense"));
  
  listExpense.forEach((element, index) => {
    console.log(element);
    const divListeHisto = document.createElement('div');
    divListeHisto.classList.add('titleHistoriqueContenu');
    divListeHisto.innerHTML += `<span class="mem">${index +1}</span>
    <span class="mem">${element.expenseTitle}</span>
    <span class="mem">${element.expenseMontant} F</span> </br>`;
    essai.appendChild(divListeHisto);
  });
}
recuperationHistorique();
/*Cache et faire apparaitre l'historique*/
const listHistorique = document.querySelector('.listHistorique');
const history = document.getElementById('history')
const close = document.getElementById('close')
history.addEventListener('click', () =>{
  listHistorique.style.display = 'block'
});
close.addEventListener('click', () =>{
  listHistorique.style.display = 'none'
})

function doublon() {
  
}