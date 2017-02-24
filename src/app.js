export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' },
      { route: 'testing',       name: 'testing',      moduleId: './test',         nav: true, title: 'Test Page' },
      { route: 'signup',       name: 'signup',      moduleId: './login',         nav: true, title: 'Signup Page' }
    ]);

    
    this.router = router;
    
  }

}
