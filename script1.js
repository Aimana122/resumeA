);

  // Подсветка активного фильтра
  const options = document.querySelectorAll("#categorySelect option");
  options.forEach(option => {
    if (option.value === selected) {
      option.setAttribute("selected", "selected");
    } else {
      option.removeAttribute("selected");
    }
  });
}
 else {
      btn.style.display = "none";
    }
  });
}
);
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('section');
  tabs.forEach(tab => {
    tab.style.display = (tab.id === tabId) ? 'block' : 'none';
  });
}
window.onload = function() {
  showTab('myCookies'); // Показываем первую вкладку при загрузке
};