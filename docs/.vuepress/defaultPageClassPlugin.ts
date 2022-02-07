export default {
  name: 'myPlugin',
  extendsPageData: (page) => {
    const frontmatter = page.frontmatter || {};
    if(!frontmatter.pageClass) {
      frontmatter.pageClass = 'content-page';
    }
  },
};
