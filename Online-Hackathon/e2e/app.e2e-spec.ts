import { OnlineHackathonPage } from './app.po';

describe('online-hackathon App', () => {
  let page: OnlineHackathonPage;

  beforeEach(() => {
    page = new OnlineHackathonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
