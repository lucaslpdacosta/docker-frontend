<template>
  <div class="grupos">
    <h1>Grupos</h1>
    <div v-for="(grupo, grupoIndex) in grupoelementos" :key="grupoIndex" class="grupo-wrapper">
      <div class="numero-grupo">
        <h2>Adicionar:</h2>
        <div class="grupo-content">
          <div v-for="(elemento, indexElemento) in grupo" :key="indexElemento" class="container">
            <div class="elemento-inner">
              <input v-model="grupo[indexElemento]" class="textfield" placeholder="Nome do componente" />
              <button @click="deleteelemento(grupoIndex, indexElemento)" class="botao botao-delete">-</button>
            </div>
          </div>
          <div class="container">
            <button @click="addelemento(grupoIndex)" class="botao add-button">+</button>
          </div>
          <div class="botao-row">
            <button @click="confirmar(grupoIndex)" class="botao botao-confirm">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="grupos-add">
      <h1>Grupos Adicionados</h1>
      <button @click="sortear" class="botao" style="margin-bottom: 20px;">Sortear</button>
      <div v-for="(grupo, grupoIndex) in createdgrupos" :key="grupoIndex" class="grupo-wrapper">
        <div class="grupo-title">
          <h2>{{ createdgruposNome === 'Componentes:' ? 'Componentes:' : 'Grupo ' + (grupoIndex + 1) }}</h2>
          <div class="grupo-content">
            <div class="container-created" v-for="(elemento, indexElemento) in grupo.componentes" :key="indexElemento">
              <p>{{ elemento.replace(/[{}"]/g, '') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createGrupo, getGrupos } from '../api.js';

export default {
  data() {
    return {
      grupoCount: 1,
      grupoelementos: [[]],
      createdgrupos: [],
      createdgruposNome: 'Componentes:',
    };
  },
  methods: {
    addelemento(grupoIndex) {
      this.grupoelementos[grupoIndex].push('');
    },
    deleteelemento(grupoIndex, indexElemento) {
      this.grupoelementos[grupoIndex].splice(indexElemento, 1);
    },
    async confirmar(grupoIndex) {
      try {
        const elementos = this.grupoelementos[grupoIndex];
        const filteredelements = elementos.filter((elemento) => elemento.trim() !== '');

        if (filteredelements.length > 0) {
          const newgrupoData = {
            componentes: filteredelements,
          };

          const response = await createGrupo(newgrupoData);

          console.log('novo grupo:', response);

          if (grupoIndex === this.grupoelementos.length - 1 && this.grupoelementos[grupoIndex].length > 0) {
            this.grupoCount++;
          }

          this.getData();
        } else {
          window.alert('Por favor, preencha antes de confirmar.');
        }
      } catch (error) {
        console.error('Error creating grupo:', error);
      }
    },
    sortear() {
      const rand = [...this.createdgrupos];
      for (let i = rand.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rand[i], rand[j]] = [rand[j], rand[i]];
      }
      this.createdgrupos = rand;

      this.createdgruposNome = 'grupo';
    },
    getData() {
      getGrupos()
        .then((data) => {
          this.createdgrupos = data;
        })
        .catch((error) => {
          console.error('Error fetching created grupos:', error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.grupo-title {
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.add-button {
  width: 20px;
  font-size: 16px;
}

.botao-delete {
  width: 20px;
  font-size: 16px;
}

.grupo-wrapper {
  display: flex;
  justify-content: center;
}

.numero-grupo {
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  text-align: center;
}

.grupo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  overflow: auto;
  max-height: 200px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.textfield {
  flex: 1;
  padding: 5px;
  margin-right: 10px;
}

.botao {
  width: 50px;
  height: 30px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, font-size 0.3s;
  font-size: 16px;
  padding: 5px 10px;
  &:hover {
    background-color: #2e8b57;
  }
}

.add-button:hover {
  background-color: #2e8b57;
}

botao-delete:hover {
  background-color: #ff5252;
}

.botao-confirm {
  display: block;
  margin: 20px auto;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-confirm:hover {
  background-color: #2e8b57;
}

.smaller-button {
  width: 5px;
}

.grupo-wrapper {
  margin-bottom: 20px;
}

.container-created {
  display: flex;
  justify-content: center;
  align-items: center;
}

.botao-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.botao {
  margin: 0;
  padding: 5px;
  width: 100px;
}

.botao-confirm + .botao-delete {
  margin-left: 10px;
}

.grupos-add {
  margin-top: 20px;
}

</style>