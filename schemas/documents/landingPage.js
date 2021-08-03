export default {
  name: "landingPage",
  title: "Landing page",
  type: "document",
  icon: () => "📟",
    fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
    },
    {
      name: "name",
      title: "name",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
      options: {
        layout: "grid",
        editModal: "fullscreen",
      } 
    },
  ],
};
