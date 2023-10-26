<template>
  <div class="home">
    <div class="centered-content">
      <div class="header">
        <h1 class="centered-title">SORTEAR GRUPOS<span class="sub-text"> (agora com docker :p)</span></h1>
      </div>

      <p class="description">Avaliação Desenvolvimento WEB para a Núvem</p>

      <div class="button-container">
        <a href="/grupos" class="nice-button">IR >></a>
      </div>
    </div>
  </div>
</template>

<style>
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0f0f0' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23a6d8e6' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d2deec' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%237eb6cd' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23b2cce8' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%235a94b4' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2391bae4' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%233a729b' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%236aa9e0' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%231c5281' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%233498db' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23003366' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

.header {
  text-align: center;
}

.centered-title {
  font-size: 36px;
  font-family: 'Arial', sans-serif;
}

.sub-text {
  font-size: 18px;
}

.description {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-top: 10px;
}

.button-container {
  text-align: center;
  margin-top: 10px;
}

.nice-button {
  display: inline-flex;
  background-color: #42b983;
  color: #fff;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

    &:hover {
    background-color: #2e8b57;
  }
}

.nice-button i {
  margin-left: 10px;
}
</style>