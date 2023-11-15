// EmailService.ts
interface EmailLog {
    user: string;
    offers: string[];
    sentDateTime: string;
    success: boolean;
  }
  
  const emailLogJournal: EmailLog[] = [];
  
  export const emailServiceApi = {
    sendEmail: (user: string, offers: string[]): Promise<boolean> => {
      // Mocking the email sending process
      const success = Math.random() < 0.8; // 80% success rate, adjust as needed
  
      // Log the email details
      const logEntry: EmailLog = {
        user,
        offers,
        sentDateTime: new Date().toISOString(),
        success,
      };
      emailLogJournal.push(logEntry);
  
      // Return a promise to simulate the asynchronous nature of email sending
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(success);
        }, 1000); // Simulate a 1-second delay in sending the email
      });
    },
  
    getEmailLogJournal: () => emailLogJournal,
  };
  