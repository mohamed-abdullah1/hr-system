import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>show all settings</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="websiteFooter">WebsiteFooter</TabsTrigger>
              <TabsTrigger value="emailSetup">EmailSetup</TabsTrigger>
              <TabsTrigger value="paymentGateway">PaymentGateway</TabsTrigger>
              <TabsTrigger value="storageSetup">StorageSetup</TabsTrigger>
              <TabsTrigger value="databaseBackup">DatabaseBackup</TabsTrigger>
              <TabsTrigger value="contactInfo">ContactInfo</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General</CardTitle>
                  <CardDescription>
                    Make changes to your general here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-500">Any thing bla </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">bla bla</CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="emailSetup">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">bla bla</CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
