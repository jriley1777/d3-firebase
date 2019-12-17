import Start from '../components/pages/Start/Start';
import Bar from '../components/pages/Bar/Bar';
import FireBar from '../components/pages/FireBar/FireBar';

export const ROUTES = [
         {
           name: "Start",
           path: "/start",
           component: Start
         },
         {
           name: "Bar",
           path: "/bar",
           component: Bar
          },
          {
            name: "FireBar",
            path: "/firebar",
            component: FireBar
          }
       ];