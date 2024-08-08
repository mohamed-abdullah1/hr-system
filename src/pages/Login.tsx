import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MainButton from "@/components/ui/MainButton";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Card className="m-4 w-full md:w-[60%] lg:w-[40%]">
        <CardHeader>
          <div className=" p-2 h-[70px] flex justify-center cursor-pointer mb-10">
            <img src={logo} className="h-[60px] " />
          </div>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            welcome back please login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-8">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="Enter your email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <div className="relative">
                  <Input
                    value={password}
                    type={showPass ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter Your Password"
                    className="mb-6 pr-10 pl-4 py-2"
                  />
                  <Button
                    variant={"ghost"}
                    className="absolute right-0 top-0 transform  text-gray-400"
                    type="reset"
                    onClick={() => setShowPass((prev) => !prev)}
                  >
                    {showPass ? (
                      <Eye className="" size={18} />
                    ) : (
                      <EyeOff className="" size={18} />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <MainButton
            content="Sign in"
            className="w-[40%] h-12"
            onClick={() => {
              navigate("/");
            }}
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
