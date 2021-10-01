import Tabs from "sanity-plugin-tabs"

export default {
  type: "document",
  title: `Frontpage`,
  name: `frontpage`,
  fields: [
    {
      name: "content",
      type: "object",
      inputComponent: Tabs,

      fieldsets: [
        { name: "main", title: "Main", options: { sortOrder: 10 } },
        { name: "aside", title: "Aside", options: { sortOrder: 20 } },
        { name: "meta", title: "Meta", options: { sortOrder: 30 } },
      ],
      options: {
        // setting layout to object will group the tab content in an object fieldset border.
        // ... Useful for when your tab is in between other fields inside a document.
        layout: "object"
      },

      fields: [
        {
          type: "object",
          name: "mainTitle",
          title: "Main Title",
          fieldset: "main",

          fieldsets: [
            { name: "ingress", title: "Ingress" },
          ],

          fields: [
            {
              type: "string",
              name: "header",
              title: "Header"
            },
            {
              type: "string",
              name: "ingressText",
              title: "Text",
              fieldset: "ingress"
            },
          ]
        },
        {
          type: "string",
          name: "info",
          title: "Information",
          fieldset: "aside"
        },
        {
          type: "object",
          name: "aside",
          fieldset: "meta",
          inputComponent: Tabs,

          fieldsets: [
            { name: "tags", title: "Tags" },
            { name: "categories", title: "Categories" },
          ],

          fields: [
            {
              type: "string",
              name: "contentType",
              title: "Content Type",
              fieldset: "tags"
            },
            {
              type: "string",
              name: "category",
              title: "Category",
              fieldset: "categories"
            },
          ]
        },
      ]
    },
    {
        name: 'name',
        title: 'Tester',
        type: 'string',
    },
  ]
};