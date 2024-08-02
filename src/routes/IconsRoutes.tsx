import {
  BellRing,
  CreditCard,
  House,
  Landmark,
  NotepadText,
  PlaneTakeoff,
  Settings,
  Trophy,
  UserRound,
  UsersRound,
} from "lucide-react";

const IconsRoutes = {
  Dashboard: <House className={`mr-8 h-5 w-5`} />,
  Attendance: <UserRound className={`mr-8 h-5 w-5 `} />,
  Award: <Trophy className={`mr-8 h-5 w-5 `} />,
  Department: <Landmark className={`mr-8 h-5 w-5 `} />,
  Employee: <UsersRound className={`mr-8 h-5 w-5 `} />,
  Leave: <PlaneTakeoff className={`mr-8 h-5 w-5 `} />,
  Loan: <CreditCard className={`mr-8 h-5 w-5 `} />,
  Notification: <BellRing className={`mr-8 h-5 w-5 `} />,
  Reports: <NotepadText className={`mr-8 h-5 w-5 `} />,
  Settings: <Settings className={`mr-8 h-5 w-5 `} />,
};
export default IconsRoutes;
