export type TTask = {
  id: string;
  title: string;
  description: string;
  createdAt: string | Date;
  status: "toDo" | "inProgress" | "inReview" | "completed";
  priority: "high" | "medium" | "low";
};
