
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConversationPage = () => {
  const { conversationId } = useParams();

  const conversation = {
    title: "Sent Alisa complaint",
    messages: [
      {
        author: "Alisa",
        role: "co-worker",
        content: "I sent alisa the email and she never responded its so annoying",
      },
      {
        author: "Becky",
        role: "",
        content: "oh that's not great",
      },
      {
        author: "David",
        role: "",
        content: "yes she sucks",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-2xl font-semibold text-slate-800">
              {conversation.title}
            </h1>
          </div>

          <div className="space-y-4">
            {conversation.messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-4"
              >
                <div className="flex items-center space-x-2 

If there's knowledge, context or custom instructions you want to include in every edit in this project, set it below.

<lov-actions>
<lov-knowledge>
</lov-actions>

Given the complexity and data storage needs of this employee insights application, connecting to a backend database like Supabase is highly recommended.  Supabase will allow you to securely store employee data, manage user logins, and scale your application effectively.  You can use the Supabase menu (once integrated) to manage your database and connect your application.
<lov-actions>
<lov-message-prompt message="Tell me more about Supabase">Learn more about Supabase</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Visit docs</lov-link>
</lov-actions>
