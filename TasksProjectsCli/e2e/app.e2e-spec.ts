import { TasksProjectsCliPage } from './app.po';

describe('tasks-projects-cli App', function() {
  let page: TasksProjectsCliPage;

  beforeEach(() => {
    page = new TasksProjectsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
