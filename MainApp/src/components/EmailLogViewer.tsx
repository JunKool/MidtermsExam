// EmailLogViewer.tsx
import React, { useState, useEffect } from 'react';
import { emailServiceApi } from '../services/EmailService';
import { marketingServiceApi } from '../services/MarketingService';
import { userServiceApi } from '../services/UserService';

const EmailLogViewer: React.FC = () => {
    const [emailLog, setEmailLog] = useState(emailServiceApi.getEmailLogJournal());
    const [frequency, setFrequency] = useState<number>(1); // Default frequency: every 1 minute
    const [newFrequency, setNewFrequency] = useState<number>(1); // State to manage the input for the new frequency

    useEffect(() => {
        // Trigger the sending of emails when the app starts
        sendEmails();

        // Set up an interval to periodically fetch the updated email log
        const intervalId = setInterval(() => {
            sendEmails();
            setEmailLog(emailServiceApi.getEmailLogJournal());
        }, frequency * 60000); // Convert minutes to milliseconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [frequency]);

    const sendEmails = () => {
        const userOfferRelationships = marketingServiceApi.getAllUserOfferRelationships();
        const currentDateTime = new Date();

        userOfferRelationships.forEach((relationship) => {
            const { userId, offerIds } = relationship;

            // Check if user's MarketingDateSent is valid

            userServiceApi.getUserById(userId)
                .then(response => {
                    const user = response.data;
                    if (user && user.marketingDateSent) {
                        const marketingDateSent = new Date(user.marketingDateSent);
                        const nextEmailDateTime = new Date(marketingDateSent.getTime() + frequency * 60000);

                        // Check if the current time is greater than the next scheduled email time
                        if (currentDateTime >= nextEmailDateTime) {
                            // Check if the user-offer relationship exists
                            if (offerIds.length > 0) {
                                // Send email (simulated for now)
                                emailServiceApi.sendEmail(user.firstname, offerIds)
                                    .then((success) => {
                                        // Log the email details
                                        const logEntry = {
                                            user: user.firstname,
                                            offers: offerIds,
                                            sentDateTime: new Date().toISOString(),
                                            success,
                                        };
                                        emailServiceApi.getEmailLogJournal().push(logEntry);
                                    });
                            }
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                });

        });
    };

    const handleFrequencyChange = () => {
        setFrequency(newFrequency); // Update the frequency when the button is clicked
      };

    return (
        <div>
            <h2>Email Log Viewer:</h2>
      <label>
        Frequency (minutes):
        <input
          type="number"
          value={newFrequency}
          onChange={(e) => setNewFrequency(Number(e.target.value))}
        />
      </label>
      <button type="button" onClick={handleFrequencyChange}>
        Change Frequency
      </button>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Offers</th>
                        <th>Sent Date/Time</th>
                        <th>Success</th>
                    </tr>
                </thead>
                <tbody>
                    {emailLog.map((logEntry, index) => (
                        <tr key={index}>
                            <td>{logEntry.user}</td>
                            <td>{logEntry.offers.join(', ')}</td>
                            <td>{logEntry.sentDateTime}</td>
                            <td>{logEntry.success ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmailLogViewer;
