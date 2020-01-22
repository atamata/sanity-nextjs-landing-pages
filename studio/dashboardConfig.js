export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e2875b96fab0f87536e8044',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rmife6vg',
                  apiId: 'fb0f48b5-adee-4c85-986e-b222f6165842'
                },
                {
                  buildHookId: '5e2875bacd861b87a43c0c06',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n3cupyzy',
                  apiId: '76a41c4c-4930-45e5-af7c-884d2b183db4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/atamata/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n3cupyzy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
