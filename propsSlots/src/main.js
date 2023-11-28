import PropsOne from './components/propsOne.vue'
import PropsTwo from './components/propsTwo.vue'
import StudentData from './components/StudentData.vue'
import SlotOne from './components/SlotsOne.vue'
import CustomButton from './components/customButton.vue'
import SlotTwo from './components/SlotTwo.vue'
import AddStudent from './components/AddStudent.vue'
import NavigationHeader from './components/NavigationHeader.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('props-one', PropsOne)
app.component('props-two', PropsTwo)
app.component('student-data', StudentData)
app.component('slot-one', SlotOne)
app.component('custom-button', CustomButton)
app.component('slot-two', SlotTwo)
app.component('add-student', AddStudent)
app.component('navigation-header', NavigationHeader)

app.use(router)
app.mount('#app')
