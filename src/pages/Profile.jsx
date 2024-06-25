import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Profile() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;