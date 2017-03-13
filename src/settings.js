const user = {
  userId: '499999771097566703',
  username: 'sakari.ruoho@f1000.com',
  firstName: 'Sakari',
  lastName: 'Ruoho',
  initials: 'SR',
  institution: 'F1000 Group',
  token: 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6InNha2FyaS5ydW9ob0BmMTAwMC5jb20iLCJ1c2VySWQiOjQ5OTk5OTc3MTA5NzU2NjcwMywiaWF0IjoxNDg0NzU5NDgwfQ.VjAs2eiBNwMvFWprQMiDVwiFn-r76YfkLmZs7xAuDQnTy0ztejbNBb98K1jQUVG78mfzM3_DfwL1roLirLQiUA',
  tokenType: 'Bearer',
  settings: { hasSeenOnboarding: true, hints: {} }
}

let settings = user.settings;
newSetting = 'INCOMPLETE';
anotherSetting = 'UNSORTED';
thirdSetting = 'INCOMPLETE';
settingKey = 'hints';


var mergeSetting = function(setting) {
  settings[settingKey] =  Object.assign({}, settings[settingKey], {[setting]: true});
  return settings;
}


console.log('settings before merge', settings);
console.log('first merge:', mergeSetting(newSetting));
console.log('another merge:', mergeSetting(anotherSetting));
console.log('third merge:', mergeSetting(thirdSetting));
user.settings = settings;
console.log('final user:', user);