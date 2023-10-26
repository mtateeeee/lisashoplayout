import { StoreLayout } from "./StoreLayout";

export default {
  title: "Your Component Title",
  component: StoreLayout,
  parameters: {
    layout: "centered",
  },
};

export const Primary = () => ({
  components: { StoreLayout },
  template: '<store-layout />',
});
