import { messages } from "@/messages/en";
type Messages = typeof messages;
declare global {
  interface IntlMessages extends Messages {}
}
