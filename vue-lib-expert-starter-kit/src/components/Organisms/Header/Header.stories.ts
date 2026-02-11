import Header from "./Header.vue";

export default {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Header principal avec toggle de thème (dark/light). Utilise HeaderLayout (Molecule) pour la structure (v-app-bar + slots). Gère le changement de thème de l'application.",
      },
    },
  },
};

const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: `
    <v-app>
      <Header />
      <v-main>
        <v-container>
          <div style="padding: 2rem; text-align: center;">
            <h2>Contenu de la page</h2>
            <p>Le header est affiché en haut avec le toggle de thème.</p>
          </div>
        </v-container>
      </v-main>
    </v-app>
  `,
});

export const Default = Template.bind({});
Default.args = {};

