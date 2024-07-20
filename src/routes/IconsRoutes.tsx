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
  Dashboard: <House className={`mr-8 h-4 w-4  `} />,
  Attendance: <UserRound className={`mr-8 h-4 w-4 `} />,
  Award: <Trophy className={`mr-8 h-4 w-4 `} />,
  Department: <Landmark className={`mr-8 h-4 w-4 `} />,
  Employee: <UsersRound className={`mr-8 h-4 w-4 `} />,
  Leave: <PlaneTakeoff className={`mr-8 h-4 w-4 `} />,
  Loan: <CreditCard className={`mr-8 h-4 w-4 `} />,
  Notification: <BellRing className={`mr-8 h-4 w-4 `} />,
  Reports: <NotepadText className={`mr-8 h-4 w-4 `} />,
  Settings: <Settings className={`mr-8 h-4 w-4 `} />,
};
export default IconsRoutes;
