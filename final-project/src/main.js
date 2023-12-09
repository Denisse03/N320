// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import './assets/main.css'
// import AddTeam from './components/LookTeam.vue'
// import TeamInfo from './components/TeamInfo.vue'
// import TeamView from './components/TeamView.vue'
// import CustomButton from './components/slots-button.vue'
// import SessionView from './views/Usersession.vue'
import NavigationHeader from './components/Headers.vue'
import FilterTag from './components/Allsession.vue'
import CustomButton from './components/slotbtn.vue'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// app.component('add-team', AddTeam)
// app.component('team-info', TeamInfo)
// app.component('team-view', TeamView)
// app.component('custom-button', CustomButton)
app.component('navigation-header', NavigationHeader)
app.component('filter-tag', FilterTag)
app.component('custom-button', CustomButton)

app.use(router)
app.mount('#app')
