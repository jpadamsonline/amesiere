<template>
  <div id="container" class="container">
    <div class="row">
      <div class="alert" v-show="showError">
        <button class="close" @click="hideMessage()">X</button>
        <strong>Error!</strong>
      </div>
      <h1>Amesiere Ibibio Translator</h1>
      <div class="info-form">
        <form v-if="autoMode">
          <div class="form-group">
            <small id="searchHelp" class="text-muted">
              Auto Search a word in English to get the Ibibio translation
            </small><br/>
            <label for="term"></label>
            <input type="text" class="text"
                name="term" v-model="search.term"
                @input.prevent="autoSearch()"
                placeholder="Type a word"/><br/>
            <button class="btn" @click.prevent="autoSearch()">
              Translate
            </button><br/>
            <ul>
              <li v-if="!matchedTerms.length">
                <span>No results found</span><br/>
              </li>
              <li v-for="translation in matchedTerms">
                <p>
                  <strong>English:</strong>
                  {{ translation.definition }}
                </p>
                <p>
                  <strong>Ibibio:</strong>
                  {{ translation.term }}
                </p>
              </li>
            </ul>
          </div>
        </form>
        <form v-if="!autoMode">
          <div class="form-group">
            <small id="searchHelp" class="text-muted">
              Enter a word in English to get the Ibibio translation (manual)
            </small><br/>
            <label for="term"></label>
            <input type="text" class="text"
                name="term" v-model="search.term"
                @submit.prevent="searchTerm()"
                placeholder="Type a word"/><br/>
            <button class="btn" @click.prevent="searchTerm()">
              Translate
            </button><br/>
            <ul>
              <li v-if="!translations.length">
                <span>No results found</span><br/>
              </li>
              <li v-for="translation in translations">
                <p>
                  <strong>English:</strong>
                  {{ translation.definition }}
                </p>
                <p>
                  <strong>Ibibio:</strong>
                  {{ translation.term }}
                </p>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import {ApiService} from '@/api.service';
  const apiService = new ApiService();

  export default {
    name: 'SearchBox',
    components: {
    },
    data() {
      return {
        showError: false,
        autoMode: true,
        translations: [],
        matchedTerms: [],
        allTerms: [],
        search: {}
      };
    },
    methods: {
      autoSearch() {
        if(!this.search.term) return this.matchedTerms = [];
        if (!this.allTerms.length) {
        apiService.getTerms(this.search.term).then((result) => {
          this.allTerms = [...result.terms];
        }, (error) => {
          this.showError = true;
        });
        }

        // TODO: make better
        let other = this.allTerms
          .filter(t => RegExp("(" + this.search.term + ")","i").test(t.definition))
          .map(t => {
            let matched = t.definition.match(RegExp("("+ this.search.term +")","i"));
            if (!matched) return null;
            return {
              ...matched,
              ...t
            };
          })
        .filter(a => !!a)
        .sort((a,b) => a.index - b.index);

        this.matchedTerms = other;
        //console.log(other);
      },
      searchTerm() {
        apiService.searchTerm(this.search.term).then((result) => {
          this.translations = [...result.translations];
        }, (error) => {
          this.showError = true;
        });
      },
      switchMode() {
        this.autoMode = !this.autoMode;
      },
      hideMessage() {
        this.showError = false;
      }
    },
    mounted() {
      // if(this.$route.params.pk) {
      //     apiService.searchTerm(this.$route.param.pk).then((term) => {
      //         this.search.term = term;
      //     });
      // }
    }
  }
</script>

<style lang="scss" scoped>
body {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'Avenir', verdana, sans-serif;
    font-size: 18px;
    #container {
        margin: 20px auto;
        width: 600px;
        form {
          input {
            text-align: center;
            padding: 6px 16px;
            line-height: 28px;
            font-size: 18px;
            width: 380px;
            margin: 8px;
          }
          button {
            line-height: 26px;
            margin: 12px;
          }
        }
        li {
          list-style-type: none;
          text-align: left;
          padding: 20px 60px 15px;
          border-bottom: solid 1px #eee;
          p {
            margin: 0 0 12px;
          }
        }
    }
}
</style>
