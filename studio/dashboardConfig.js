export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d83f76652ec0cc399fe346d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p8289fxc',
                  apiId: '16a73933-9bef-43b3-b18c-6b33d41a62ac'
                },
                {
                  buildHookId: '5d83f766ab37ad5821b5db8a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fvesgzow',
                  apiId: '48309354-1fc7-4892-afbc-f1383a11699e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antoniwan/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fvesgzow.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
