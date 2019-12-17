import Start from '../components/pages/Start/Start';
import Bar from '../components/pages/Bar/Bar';
import FireBar from '../components/pages/FireBar/FireBar';

export const ROUTES = [
         {
           name: "Start",
           path: "/start",
           component: Start,
           description: "A test for drawing shapes on svg"
         },
         {
           name: "Bar",
           path: "/bar",
           component: Bar,
           description: "A basic bar graph with scales and axes"
         },
         {
           name: "FireBar",
           path: "/firebar",
           component: FireBar,
           description: "A bar graph connected to a firestore db"
         }
       ];