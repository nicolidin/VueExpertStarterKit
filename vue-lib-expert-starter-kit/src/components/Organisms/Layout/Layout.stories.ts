import { ref } from "vue";
import Layout from "./Layout.vue";
import SidebarTags from "../../Molecules/SidebarTags/SidebarTags.vue";

export default {
  title: "Organisms/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Layout minimal : Header, slot optionnel #sidebar, slot default (contenu). La page injecte ce qu’elle veut dans #sidebar (ex. SidebarTags).",
      },
    },
  },
};

const TemplateWithSidebar = (args: any) => ({
  components: { Layout, SidebarTags },
  setup() {
    const tags = ref(args.tags || []);
    const onTagClick = (clickedTag: { libelleName: string; isSelected: boolean }) => {
      const tag = tags.value.find((t: { libelleName: string }) => t.libelleName === clickedTag.libelleName);
      if (tag) tag.isSelected = clickedTag.isSelected;
    };
    const onTagCreate = (newTag: { title: string; color: string }) => {
      tags.value.push({ libelleName: newTag.title, isSelected: false, color: newTag.color });
    };
    return { args, tags, onTagClick, onTagCreate };
  },
  template: `
    <Layout>
      <template #sidebar>
        <SidebarTags
          :model-value="true"
          :tags="tags"
          :permanent="true"
          @tag-click="onTagClick"
          @tag-create="onTagCreate"
        />
      </template>
      <div style="padding: 2rem; text-align: center;">
        <h2>Contenu dans le slot du layout</h2>
        <p>La sidebar est injectée par la page via le slot #sidebar.</p>
        <div v-if="tags && tags.length > 0" style="margin-top: 2rem;">
          <h3>Tags sélectionnés:</h3>
          <ul style="list-style: none; padding: 0;">
            <li v-for="tag in tags.filter(t => t.isSelected)" :key="tag.libelleName" style="margin: 0.5rem 0;">
              {{ tag.libelleName }}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  `,
});

const TemplateWithoutSidebar = () => ({
  components: { Layout },
  template: `
    <Layout>
      <div style="padding: 2rem; text-align: center;">
        <h2>Contenu sans sidebar</h2>
        <p>Aucun slot #sidebar fourni.</p>
      </div>
    </Layout>
  `,
});

export const Default: any = TemplateWithSidebar.bind({});
Default.args = {
  tags: [
    { libelleName: "Important", isSelected: false },
    { libelleName: "Work", isSelected: false },
    { libelleName: "Personal", isSelected: false },
    { libelleName: "Shopping", isSelected: false },
  ],
};

export const WithoutSidebar: any = TemplateWithoutSidebar.bind({});

export const WithEmptyTags: any = TemplateWithSidebar.bind({});
WithEmptyTags.args = { tags: [] };

export const WithManyTags: any = TemplateWithSidebar.bind({});
WithManyTags.args = {
  tags: [
    { libelleName: "Important", isSelected: false },
    { libelleName: "Work", isSelected: false },
    { libelleName: "Personal", isSelected: false },
    { libelleName: "Shopping", isSelected: false },
    { libelleName: "Ideas", isSelected: false },
    { libelleName: "Recipes", isSelected: false },
    { libelleName: "Travel", isSelected: false },
    { libelleName: "Health", isSelected: false },
  ],
};
