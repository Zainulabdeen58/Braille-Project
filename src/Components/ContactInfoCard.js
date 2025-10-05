import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function InfoCard({ title, children }) {
  return (
    <Card className="transition-colors hover:bg-muted focus-within:bg-muted">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">{children}</CardContent>
    </Card>
  );
}
