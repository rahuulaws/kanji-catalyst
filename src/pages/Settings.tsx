
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

const Settings = () => {
  const [confirmText, setConfirmText] = useState("");
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Dark Mode</Label>
            <div className="text-sm text-muted-foreground">
              Toggle between light and dark themes
            </div>
          </div>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Reset History</Label>
            <div className="text-sm text-muted-foreground">
              Reset all study progress and history
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Reset History</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Type "reset me" to confirm.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="Type 'reset me'"
                />
              </div>
              <DialogFooter>
                <Button
                  variant="destructive"
                  disabled={confirmText !== "reset me"}
                  onClick={() => {
                    // Handle reset here
                    console.log("Resetting history...");
                  }}
                >
                  Reset History
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Settings;
