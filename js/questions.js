// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Users at Cloud Kicks are reporting different options when uploading a custom picklist on the Opportunity object based on the kind of opportunity. Where Should an administrator update the option in the picklist?",
    answer: ["Record Type"],
    options: [
      "Fields and relationships",
      "Related lookup filters",
      "Record Type",
      "Picklist value sets"
    ],
    nb_good_answer:1
  },
  {
    numb: 2,
    question: "An administrator has been asked to update a flow that was created as part of a recent update. When the administrator opens the flow for editing, the Flow toolbox offers only four elements: Assignment, Decision, Get Records, and Loop. What would cause this?",
    answer: ["The flow is a before save flow."],
    options: [
      "The flow is a screen flow.",
      "The version of the flow is inactive.",
      "The flow is a before save flow.",
      "The version of the flow is activated."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 3,
    question: "An administrator wants to create a form in Salesforce for users to fill out when they lose a client. Which automation tool supports creating a wizard to accomplish this goal?",
    answer: ["Flow Builder"],
    options: [
      "Process Builder",
      "Approval Process",
      "Outbound Message",
      "Flow Builder"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 4,
    question: "The Client services and customer support teams share the same profile but have different permission sets. The Custom Object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
    answer: ["Component Visibility"],
    options: [
      "Sharing settings",
      "Page Layout Assignment",
      "Component Visibility",
      "Record Type Assignment"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 5,
    question: "The VP of sales at Universal Containers wants to prevent members of the sales team from changing an opportunity to a date in the past. What should an administrator configure to meet this requirement?",
    answer: ["Validation Rule"],
    options: [
      "Assignment Rule",
      "Validation Rule",
      "Field-Level Security",
      "Approval Process"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 6,
    question: "Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of Sales requested that this information be accessible on the opportunity and available for reporting. Which two options should the administrator configure to meet these requirements?",
    answer: ["Customize Opportunity Contact Role", "Add the Opportunity Contact Role related list to the Opportunity page layout"],
    options: [
      "Customize Campaign Member Role",
      "Add the Campaign Member related list to the Opportunity page layout",
      "Customize Campaign Role",
      "Customize Opportunity Contact Role",
      "Add the Opportunity Contact Role related list to the Opportunity page layout"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 7,
    question: "The administrator at Cloud Kicks has a Custom picklist field on Lead, Which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated?",
    answer: ["Create a custom picklist field on Contact", "Map the picklist field on the Lead to the Contact"],
    options: [
      "Create a custom picklist field on Contact",
      "Update the picklist value with a validation rule",
      "Map the picklist field on the Lead to the Contact",
      "Set the picklist field to be required on the Lead Object"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 8,
    question: "Universal Containers is trying to improve the user experience when searching for the tight status of a case. The company currently has one support process that is used for all record types of cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on. How should the administrator improve on the current implementation?",
    answer: ["Review which status choices are needed for each record type and create support processes for each that is necessary"],
    options: [
      "Reduce the number of case status values to five",
      "Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console",
      "Review which status choices are needed for each record type and create support processes for each that is necessary",
      "Edit the status choices directly on the record type"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 9,
    question: "When a Sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
    answer: ["Flow Builder"],
    options: [
      "Flow Builder",
      "Workflow Rule",
      "Platform Event",
      "Process Builder"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 10,
    question: "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors. Which two tools should an administrator configure?",
    answer: ["Outbound Message","Approval Process"],
    options: [
      "Quick Action",
      "Outbound Message",
      "Approval Process",
      "Email Alert Action"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 11,
    question: "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
    answer: ["Geolocation"],
    options: [
      "Geolocation",
      "Geofence",
      "Custom address",
      "External lookup"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 12,
    question: "What are two considerations an administrator should keep in mind when working with Salesforce objects?",
    answer: ["Custom and standard objects have standard fields", "Standard objects are included with Salesforce"],
    options: [
      "Custom and standard objects have standard fields",
      "Standard objects are included with Salesforce",
      "A new standard object can be created",
      "Only standard objects support master-detail relationships"
    ],
    nb_good_answer: 2
  },
  {
    numb: 13,
    question: "Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard. What are the two reasons this is likely to occur?",
    answer: ["The dashboard needs to be refreshed", "The running dashboard user and viewer have different permissions"],
    options: [
      "The report needs to be refreshed",
      "The dashboard needs to be refreshed",
      "The current user does not have access to the report folder",
      "The running dashboard user and viewer have different permissions"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 14,
    question: "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign. Which two solutions should the administrator use to modify the picklist field values?",
    answer: ["Add the Campaign Member Statuses related list to the Page Layout", "Modify the picklist value on the Campaign Member Statuses related list"],
    options: [
      "Add the Campaign Member Statuses related list to the Page Layout",
      "Edit the picklist values for the Campaign Status in object Manager",
      "Mass modify the Campaign Member Statuses related list",
      "Modify the picklist value on the Campaign Member Statuses related list"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 15,
    question: "Ursa Solar Major is evaluating Salesforce for its service team and would like to know what objects were available out of the box. Which three of the standard objects are available to an administrator considering a support use case?",
    answer: ["Contract","Case","Account"],
    options: [
      "Contract",
      "Case",
      "Ticket",
      "Request",
      "Account"
    ],
    nb_good_answer: 3
  },
  
  {
    numb: 16,
    question: "The administrator at Cloud Kicks has been asked to replace two old workflow rules that are doing a simple field update when a lead is created to improve processing time. What tool should the administrator use to replace the workflow rules?",
    answer: ["Before Save Flow"],
    options: [
      "Quick Action Flow",
      "Before Save Flow",
      "Scheduled Flow",
      "Screen Flow"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 17,
    question: "Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The Services team also wants to use Opportunity to track installation. All three teams will need to use different fields and stages. How should the administrator configure this requirement?",
    answer: ["Create three sales processes. Create three record types and three page layouts"],
    options: [
      "Create three sales processes. Create three record types and one page layout",
      "Create one sales process. Create three record types and three page layouts",
      "Create three sales processes. Create three record types and three page layouts",
      "Create one sales process. Create one record type and three page layouts"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 18,
    question: "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their websites. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    answer: ["Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry"],
    options: [
      "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule",
      "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry",
      "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule",
      "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 19,
    question: "The VP of sales at Dreamhouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key place of data is the total of all sales for the year and the progress to the enterprise sales goal. What dashboard component will effectively show this number and the proximity to the total goal as a single value?",
    answer: ["Gauge"],
    options: [
      "Table",
      "Stacked Bar",
      "Donut",
      "Gauge"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 20,
    question: "A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is. Which tool should an administrator use to accomplish this?",
    answer: ["Mass Transfer Tool"],
    options: [
      "Data Loader",
      "Mass Transfer Tool",
      "Data Import Wizard",
      "Dataloader.io"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 21,
    question: "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
    answer: ["Separate record types and Sales processes for the different types of opportunities"],
    options: [
      "Validation rules that ensure that users are entering accurate sales stage information",
      "Different page layouts that control the picklist values for the opportunity types",
      "Public groups to limit record types and sales processes for opportunities",
      "Separate record types and Sales processes for the different types of opportunities"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 22,
    question: "An administrator installed a managed package that contains a permission set group. The permission set group that was installed includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records. What should the administrator do to control Delete access?",
    answer: ["Use a muting permission set with a permission set group to mute selected permissions"],
    options: [
      "Use a muting permission set with a permission set group to mute selected permissions",
      "Create a new permission set that has Delete access deselected for the objects",
      "Create a new role that prevents Delete permissions from rolling up to the users",
      "Edit the profile for the users to remove Delete access from the objects"
    ],
    nb_good_answer: 1
  },
  {
    numb: 23,
    question: "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
    answer: ["Design a standard Campaign report and add the value Won Opportunities in the Campaign field"],
    options: [
      "Design a standard Campaign report and add the value Won Opportunities in the Campaign field",
      "Perform periodic data job to update campaign records",
      "Create a roll-up summary field on Opportunity to Campaign",
      "Add a Total Value Field on campaign and use a workflow rule to update the value when an opportunity is won"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 24,
    question: "Cloud Kicks wants to allow customers to create their own cases while visiting its public homepage. What should the administrator recommend?",
    answer: ["Web-to-Case"],
    options: [
      "SMS Response",
      "Web-to-Case",
      "Email-to-Case",
      "Omni-Channel"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 25,
    question: "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000. What should the administrator configure to meet this requirement?",
    answer: ["Set up Big Deal Alerts for the amount"],
    options: [
      "Set up Big Deal Alerts for the amount",
      "Enable Opportunity Update Reminders",
      "Opportunity warning in Kanban View",
      "Key Deals component on the homepage"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 26,
    question: "Cloud Kicks wants users to only be able to choose Opportunity stage closed won if the Lead source has been selected. How should the administrator accomplish this goal?",
    answer: ["Configure a validation rule requiring Lead Source when the stage is set to closed won"],
    options: [
      "Make Lead Source a dependent picklist to the Opportunity stage field",
      "Configure a validation rule requiring Lead Source when the stage is set to closed won",
      "Change the Opportunity stage field to read-only on the page layout",
      "Modify the Opportunity stage as a dependent picklist to the Lead source field"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 27,
    question: "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should an administrator use to fulfill this requirement?",
    answer: ["Case Escalation Rule"],
    options: [
      "Assignment Rule",
      "Case Escalation Rule",
      "Omni-Channel Supervisor",
      "Formula Field"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 28,
    question: "Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field. Which two options should the administrator recommend to help simplify the process? Choose 2 answers",
    answer: ["Add a path for stage to the opportunity record page","Use a Kanban list view for Opportunity"],
    options: [
      "Add a path for stage to the opportunity record page",
      "Use a Kanban list view for Opportunity",
      "Configure an auto-launched flow for Opportunity editing",
      "Create a simplified Opportunity page layout"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 29,
    question: "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should the administrator utilize to import the records to Salesforce?",
    answer: ["Data Import Wizard"],
    options: [
      "Dataloader.io",
      "Data Loader",
      "Manual Import",
      "Data Import Wizard"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 30,
    question: "An administrator created a record trigger flow to update contacts. How should the administrator reference the values of the active record the flow is running on?",
    answer: ["Use the $Record global variable"],
    options: [
      "Use the {!Contact.Id} global variable",
      "Use the {!Account.Id} record variable",
      "Use the $Record global variable",
      "Use the Get Records element to find the Id"
    ],
    nb_good_answer: 1
  },
  {
    numb: 31,
    question: "An administrator gets a rush request from Human Resources to remove a user’s access to Salesforce Immediately. The user is part of a hierarchy field called Direct Manager. What should the administrator do to fulfill the request?",
    answer: ["Freeze the user to prevent them from logging in while removing them from being referenced in the Direct Manager field"],
    options: [
      "Freeze the user to prevent them from logging in while removing them from being referenced in the Direct Manager field",
      "Deactivate the user and delete any records where they are referenced in the Direct Manager field",
      "Change the user’s profile to read-only while removing them from being referenced in the Direct Manager Field",
      "Delete the user and leave all records where they are referenced in the Direct Manager Field without changes"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 32,
    question: "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
    answer: ["Enable Contacts to multiple Accounts"],
    options: [
      "Use a partner community to track the Contacts",
      "Create a new Contact record for each agency",
      "Create a Junction object to track many-to-many relationships",
      "Enable Contacts to multiple Accounts"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 33,
    question: "Which two actions should an administrator perform with Case escalation rules? Choose 2 answers",
    answer: ["Send email notifications","Re-assign the Case"],
    options: [
      "Re-open the Case",
      "Send email notifications",
      "Change the Case Priority",
      "Re-assign the Case"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 34,
    question: "The Sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure? Choose 2 answers",
    answer: ["Sales Quota","Forecasting"],
    options: [
      "Sales Quota",
      "Opportunity List View",
      "Forecasting",
      "Opportunity Stages"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 35,
    question: "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed in the Sales Console and in the Service Console. How should an administrator meet this requirement?",
    answer: ["Assign Lightning pages as app default"],
    options: [
      "Update page layout assignments",
      "Define multiple record types",
      "Assign Lightning pages as app default",
      "Create different user profiles"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 36,
    question: "Sales reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities. What should an administrator suggest to meet this request?",
    answer: ["Make the field editable on page layouts"],
    options: [
      "Define a new Stage picklist value",
      "Create a custom field on Opportunity",
      "Configure Forecasting support",
      "Make the field editable on page layouts"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 37,
    question: "Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on Pacific time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support. How should an administrator solve this issue?",
    answer: ["Create one set of business hours per time zone"],
    options: [
      "Set temporary business hours for each time zone",
      "Adjust the current business hours to accommodate the Eastern Time Zone",
      "Create one set of business hours per time zone",
      "Allow the reps to set business hours manually"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 38,
    question: "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in a variable for use later in the flow. What flow element should the administrator add?",
    answer: ["Get Records"],
    options: [
      "Assignment",
      "Get Records",
      "Create Records",
      "Update Records"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 39,
    question: "An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created. What could the issue be?",
    answer: ["The flow is inactive"],
    options: [
      "The flow is read-only",
      "The flow is inactive",
      "The flow URL is deactivated",
      "The flow trigger is missing"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 40,
    question: "The sales manager at Cloud Kicks wants to set up a business process where opportunity discounts over 30% need to be approved by the VP of sales. Any discounts above 10% need to be approved by the user’s manager. The administrator has been tasked with creating an approval process. Which are two considerations the administrator needs to review before setting up this approval process? Choose 2 answers",
    answer: ["Create a custom Discount field on the opportunity to capture the discount amount", "Populate the Manager standard field on the sales users’ User Detail page"],
    options: [
      "Create a custom Discount field on the opportunity to capture the discount amount",
      "Populate the Manager standard field on the sales users’ User Detail page",
      "Configure two separate approval processes",
      "Allow the submitter to choose the approver manually"
    ],
    nb_good_answer: 2
  },
  {
    numb: 41,
    question: "What are three characteristics of a master-detail relationship? Choose 3 answers",
    answer: [
      "The master object can be a standard or custom object.",
      "Roll-up summaries are supported in master-detail relationships.",
      "The owner field on the detail records is the owner of the master record."
    ],
    options: [
      "The master object can be a standard or custom object.",
      "Permissions for the detail record are set independently of the master.",
      "Each object can have up to five master-detail relationships.",
      "Roll-up summaries are supported in master-detail relationships.",
      "The owner field on the detail records is the owner of the master record."
    ],
    nb_good_answer: 3
  },
  
  {
    numb: 42,
    question: "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration? Choose 2 answers",
    answer: [
      "IP address restrictions are set on the profile or globally for the org.",
      "Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions."
    ],
    options: [
      "IP address restrictions are set on the profile or globally for the org.",
      "Users can change their password to avoid login IP restrictions.",
      "Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.",
      "Single sign-on will allow users to log in from anywhere."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 43,
    question: "The administrator at Cloud Kicks has created an approval process for time off requests. Which two automated actions are available to be added as part of the approval process? Choose 2 answers",
    answer: [
      "Field Update",
      "Email Alert"
    ],
    options: [
      "Field Update",
      "Chatter Post",
      "Auto-launched Flow",
      "Email Alert"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 44,
    question: "Which two capabilities are considerations when marking a field as required in Object Manager? Choose 2 answers",
    answer: [
      "The field is universally required to save a record on that object.",
      "The field is added to every page layout on that object."
    ],
    options: [
      "The field is not required to save records via the API on that object.",
      "The field is universally required to save a record on that object.",
      "The field is added to every page layout on that object.",
      "The field is optional when saving records via web-to-lead and web-to-case."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 45,
    question: "Universal Containers require that when an Opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    answer: ["Flow Builder"],
    options: [
      "Quick Action",
      "Workflow Rule",
      "Flow Builder",
      "Outbound Message"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 46,
    question: "Cloud Kicks wants a report to categorize accounts into small, medium, and large based on the dollar value found in the Contract Value Field. What feature should an administrator use to meet this request?",
    answer: ["Bucket Column"],
    options: [
      "Detail Column",
      "Bucket Column",
      "Group Rows",
      "Filter Logic"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 47,
    question: "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
    answer: ["Configure a scheduled flow in Flow Builder"],
    options: [
      "Create a workflow rule with an outbound message.",
      "Set up a scheduled process in Process Builder.",
      "Configure a scheduled flow in Flow Builder",
      "Use a process to update the account when it is edited."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 48,
    question: "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permissions and the two-factor authentication for API Logins permission to a group of users. Which two prompts will happen when one of the users attempts to log in to Data Loader? Choose 2 answers",
    answer: [
      "Users need to download and install an authenticator app on their mobile device.",
      "Users need to connect an authenticator app to their Salesforce account."
    ],
    options: [
      "Users need to download and install an authenticator app on their mobile device.",
      "Users need to enter a verification code from email or SMS, whichever has higher priority.",
      "Users need to connect an authenticator app to their Salesforce account.",
      "Users need to get a security token from a trusted network using Reset My Security Token."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 49,
    question: "Cloud Kicks need to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement? Choose 2 answers",
    answer: [
      "One page layout, two record types, one picklist",
      "Two page layouts, one record type, two picklists"
    ],
    options: [
      "One page layout, two record types, one picklist",
      "Two page layouts, one record type, two picklists",
      "Two permission sets, one record type, one picklist",
      "One record type, two profiles, one picklist"
    ],
    nb_good_answer: 2
  },
  {
    numb: 50,
    question: "At Universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well. Which are two considerations for enabling this functionality? Choose 2 answers",
    answer: [
      "The Add Record action must be configured in the group publisher.",
      "An administrator needs to create a group to enable record sharing."
    ],
    options: [
      "Collaboration groups are created automatically for every department.",
      "Object layouts should be configured to include the groups related list.",
      "The Add Record action must be configured in the group publisher.",
      "An administrator needs to create a group to enable record sharing."
    ],
    nb_good_answer: 2
  },
  {
    numb: 51,
    question: "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has found that the source reports have changed. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
    answer: [
      "Move the dashboard reports to the view-only folder.",
      "Change the dashboard to be a dynamic dashboard."
    ],
    options: [
      "Create a new report folder with viewer access.",
      "Move the dashboard to the user’s private folder.",
      "Move the dashboard reports to the view-only folder.",
      "Change the dashboard to be a dynamic dashboard."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 52,
    question: "Cloud Kicks has decided to delete a custom field. What will happen to the data in the field when it is deleted?",
    answer: ["The data in the field is stored for 15 days."],
    options: [
      "The data in the field is stored for 15 days.",
      "The data is permanently deleted.",
      "The data associated with the field is required.",
      "The data is restorable from the recycle bin."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 53,
    question: "AW Computing has six sales teams in a region. These teams always consists of the same account manager, engineer, and assistant. What should the administrator configure to make it easier for teams to collaborate with the same customer?",
    answer: ["Enable account teams and show the users how to set up a default account team."],
    options: [
      "Enable and configure standard opportunity teams with splits.",
      "Enable account teams and show the users how to set up a default account team.",
      "Create a queue for each team and assign account ownership to the queue.",
      "Propose the users manually share all their accounts with their teammates."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 54,
    question: "A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password. Which two options should the administrator consider when resetting the user’s password? Choose 2 answers",
    answer: [
      "Resetting a locked-out user’s password automatically unlocks the user’s account.",
      "After resetting a password, the user may be required to activate their device to successfully log in to Salesforce."
    ],
    options: [
      "Resetting the password will change the user’s password policy.",
      "Single sign-on users can reset their own passwords using the forgot password link.",
      "Resetting a locked-out user’s password automatically unlocks the user’s account.",
      "After resetting a password, the user may be required to activate their device to successfully log in to Salesforce."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 55,
    question: "When users log in to Salesforce via the user interface, which two settings does the system check for authentication? Choose 2 answers",
    answer: [
      "The user’s Two-Factor Authentication for User Interface Logins permission",
      "The user’s profile login hours restrictions"
    ],
    options: [
      "The user’s Two-Factor Authentication for API Logins permission",
      "The role IP address restrictions",
      "The user’s profile login hours restrictions",
      "The user’s Two-Factor Authentication for User Interface Logins permission"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 56,
    question: "Which two solutions could an administrator find on the AppExchange to enhance their organization? Choose 2 answers",
    answer: ["Consultants", "Components"],
    options: [
      "Communities",
      "Consultants",
      "Components",
      "Customers"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 57,
    question: "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
    answer: ["Process Builder"],
    options: [
      "Lightning Web Component",
      "Approval Process",
      "Workflow Field Update",
      "Process Builder"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 58,
    question: "Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
    answer: ["Page Layout editor"],
    options: [
      "Related Lookup Filters",
      "Compact Layout Editor",
      "Page Layout editor",
      "Search Layout Editor"
    ],
    nb_good_answer: 1
  },
  {
    numb: 59,
    question: "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer’s issue. What should the administrator suggest to meet these requirements?",
    answer: ["Auto-Response Rules"],
    options: [
      "Auto-Response Rules",
      "Email Alerts",
      "Knowledge Articles",
      "Assignment Rules"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 60,
    question: "Northern Trail Outfitters is using one profile for all of its marketing users, providing read-only access to the Campaign object. A few marketing users now require comprehensive edit access on Campaigns. How should an administrator fulfill this request? Choose two answers",
    answer: [
      "Permission sets",
      "Marketing user checkbox"
    ],
    options: [
      "Permission sets",
      "Organization-wide defaults",
      "Marketing user checkbox",
      "Field-level security"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 61,
    question: "The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases. How should the screen flow be distributed?",
    answer: ["Lightning page"],
    options: [
      "Page Layout",
      "Component Filter",
      "Lightning page",
      "Home page"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 62,
    question: "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
    answer: ["Add the Salesforce Mobile and Lightning Experience action to the page layout."],
    options: [
      "Create a custom Lightning App with the action.",
      "Modify compact Case page layout to include the action.",
      "Include the action in the Salesforce Mobile Navigation menu.",
      "Add the Salesforce Mobile and Lightning Experience action to the page layout."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 63,
    question: "The administrator at DreamHouse Realty added an email quick action to the Case page layout and is unable to see the action on the case feed. Which feature must be enabled to ensure the quick action will be displayed as expected?",
    answer: ["Email-to-Case"],
    options: [
      "Email Notifications",
      "Email-to-Case",
      "Email Alerts",
      "Email Templates"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 64,
    question: "An administrator has reviewed an upcoming critical update. How should the administrator proceed with activation of the critical update?",
    answer: ["Activate the critical update in a sandbox."],
    options: [
      "Activate the critical update in a sandbox.",
      "Allow the critical update to auto-activate.",
      "Activate the critical update in production.",
      "Allow the critical update to auto-activate in a sandbox."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 65,
    question: "DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases. Which two solutions should an administrator use to meet this request? Choose 2 answers",
    answer: [
      "Web-to-Case",
      "Email-to-Case"
    ],
    options: [
      "Web-to-Case",
      "Case Escalation",
      "Case Queues",
      "Email-to-Case"
    ],
    nb_good_answer: 2
  },
  {
    numb: 66,
    question: "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
    answer: ["Check the AppExchange for prebuilt Solution that can be easily customized."],
    options: [
      "Train someone on the sales and marketing teams to build dashboards.",
      "Check the AppExchange for prebuilt Solution that can be easily customized.",
      "Hire a Consultant to build the custom dashboards.",
      "Build the dashboards manually to meet the deadline."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 67,
    question: "Dreamhouse realty wants to offer a form on its experience cloud site where inspectors will submit findings from a property inspection. Which feature should an administrator place on the page to fulfill this requirement?",
    answer: ["Screen Flow"],
    options: [
      "Related List",
      "Autolaunched Flow",
      "Record Detail",
      "Screen Flow"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 68,
    question: "The administrator at Ursa Major Solar needs to make sure the unassigned cases from VP customers get transferred to the appropriate service representative within 5 hours. VIP Customers have access to support 24 hours a day. How should this be configured?",
    answer: ["Assignment Rules."],
    options: [
      "Assignment Rules.",
      "Business Hours.",
      "Case Queues",
      "Escalation Rules"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 69,
    question: "An administrator at Ursa Major Solar needs to send information to an external accounting system whenever an opportunity closes. What workflow action should the administrator use to accomplish this?",
    answer: ["Outbound Message"],
    options: [
      "Assign Task",
      "Outbound Message",
      "Create Record",
      "Custom Notification"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 70,
    question: "Northern Trail Outfitters has the Case Object set to private. The support manager raised a concern that the reps have a broader view of data than expected and can see all cases on their groups dashboards. What could be causing reps to have inappropriate access to data on dashboards?",
    answer: ["View Dashboard as another person"],
    options: [
      "Dashboard Filters",
      "Dashboard Subscriptions",
      "View Dashboard as another person",
      "Public Dashboards"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 71,
    question: "An Administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won and another task after 60 days to check in with the customer. Which two automation tools should the administrator use?",
    answer: [
      "Process Builder",
      "Workflow Rule"
    ],
    options: [
      "Process Builder",
      "Workflow Rule",
      "Field Update",
      "Outbound Message"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 72,
    question: "An administrator Creates a custom text field on the Account object and adds it to the service team's page layout. The services team manager loves the addition of this field and wants it to appear in the highlights panel so that the services reps can quickly find it when on the Account Page.",
    answer: ["In the Account object manager, create a custom compact layout."],
    options: [
      "Create a new page layout and a new section titled highlights panel.",
      "In the Account object manager, create a custom compact layout.",
      "From the page layout editor, select the field to the highlights panel.",
      "Make the field required and move it to the top of the page."
    ],
    nb_good_answer: 1
  },
  {
    numb: 73,
    question: "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest online. The team currently does not have access to the lead object. How should an administrator provide proper access?",
    answer: ["Configure permission sets."],
    options: [
      "Create a new profile",
      "Configure permission sets.",
      "Assign a new role.",
      "Set Up Manual Sharing"
    ],
    nb_good_answer: 1
  },
  {
    numb: 74,
    question: "An administrator supporting a global team of Salesforce users has been asked to configure company settings. Choose 2 options",
    answer: ["Currency Locale", "Default Language"],
    options: ["Currency Locale", "Default Language", "Password Policy", "Login Hours"],
    nb_good_answer: 2
  },
  {
    numb: 75,
    question: "Which item is available in a Lightning App where visibility is limited to the Salesforce Mobile App?",
    answer: ["Home Page"],
    options: ["Today", "Favorites", "Utility Bar", "Home Page"],
    nb_good_answer: 1
  },
  {
    numb: 76,
    question: "Ursa Major Solar wants to know which of its marketing efforts are helping the team win Opportunities. What should an administrator configure to provide these insights?",
    answer: ["Campaign Influence"],
    options: ["Campaign Hierarchy", "Campaign Influence", "Map Custom Lead Fields", "List Email Activities"],
    nb_good_answer: 1
  },
  {
    numb: 77,
    question: "Ursa Major Solar uses two different page layouts for Account records. One page layout reflects the fields related to customer accounts and another page layout includes fields for partner accounts. The administrator has assigned the customer account page layout to sales and support users and the partner account layout to the partner management team. What should the administrator configure to meet this requirement?",
    answer: ["Create one record type for customer accounts and one record type for partner accounts"],
    options: [
      "Use a public group and a criteria-based sharing rule to share customer accounts with the partner team.",
      "Add members of the partner management team to the default Account team for the customer accounts.",
      "Grant create, read, edit and delete access to customer accounts on the partner team profile.",
      "Create one record type for customer accounts and one record type for partner accounts"
    ],
    nb_good_answer: 1
  },
  {
    numb: 78,
    question: "User at Cloud Kicks want to see information more useful for their role on the Case page. How should an administrator make the pages more dynamic and easier to use?",
    answer: ["Add Component visibility filters to the Components"],
    options: [
      "Add Component visibility filters to the Components",
      "Remove fields from the record details component",
      "Delete the extra component from the page",
      "Include more tab components with filters"
    ],
    nb_good_answer: 1
  },
  {
    numb: 79,
    question: "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
    answer: ["Case Escalation Rules"],
    options: ["Case Scheduled Reports", "Case Dashboard Refreshes", "Case Escalation Rules", "Case Assignment Rules"],
    nb_good_answer: 1
  },
  {
    numb: 80,
    question: "Cloud Kicks has created a screen flow for their sales team to use when they add new leads. The screen flow collects name, email and shoe preference. Which two things should the administrator do to display the screen flow? Choose 2 answers",
    answer: [
      "Create a tab and add the screen flow to the page",
      "Use a flow element and add the screen flow to the record page"
    ],
    options: [
      "Create a tab and add the screen flow to the page",
      "Use a flow element and add the screen flow to the record page",
      "Add the flow in the utility bar of the console",
      "Install an app from the AppExchange"
    ],
    nb_good_answer: 2
  },
  {
    numb: 81,
    question: "Universal Containers has two sales teams, Sales team A and Sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How Should the administrator share records owned by sales team A with Sales team B?",
    answer: ["Owner based sharing"],
    options: [
      "Hierarchical sharing",
      "Use Manual sharing",
      "Criteria based sharing",
      "Owner based sharing"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 82,
    question: "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount. How should the administrator export this file?",
    answer: ["Data Loader."],
    options: [
      "Data Export Wizard.",
      "Data Import Wizard.",
      "Data Export",
      "Data Loader."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 83,
    question: "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
    answer: ["Configure Email-to-Case so emails are delivered to the correct queue."],
    options: [
      "Utilize a flow to identify the correct queue and assign the case.",
      "Use a custom email service to set the owner of the case upon creation.",
      "Create Escalation Rules to send cases to the correct queue.",
      "Configure Email-to-Case so emails are delivered to the correct queue."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 84,
    question: "Sales reps at Cloud Kicks want to be notified when they have a high likelihood of winning an opportunity over $1,000,000. Which feature meets this requirement?",
    answer: ["Big Deal Alerts"],
    options: [
      "Key Deals",
      "Big Deal Alerts",
      "Activity Timeline.",
      "Performance chart."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 85,
    question: "Universal Container wants to increase the security of their org by requiring stricter user passwords. Which two of the following should an administrator configure? Choose 2 answers",
    answer: [
      "Minimum password length.",
      "Password complexity requirement."
    ],
    options: [
      "Password different than username",
      "Prevent common words",
      "Minimum password length.",
      "Password complexity requirement."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 86,
    question: "Northern Trail Outfitters wants to know the average stage duration for all closed Opportunities. How should an administrator support this request?",
    answer: ["Run the Opportunity Stage Duration report."],
    options: [
      "Use a process builder to capture the daily average on each opportunity.",
      "Add Formula Fields to track Stages on each Opportunity.",
      "Run the Opportunity Stage Duration report.",
      "Refresh weekly reporting snapshots for Closed Opportunities."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 87,
    question: "Ursa Major Solar has a path on Case. The Company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from preventing the case back to a previous status. Which Feature Should an administrator use to fulfill this request?",
    answer: ["Validation rules."],
    options: [
      "Validation rules.",
      "Global Value Picklists",
      "Predefined field Values.",
      "Dependent Picklists."
    ],
    nb_good_answer: 1
  },
  
  

  {
    numb: 88,
    question: "Sales reps miss key fields when filling out an opportunity record through the process. Reps need to update an opportunity to Won and to be unable to enter the previous stage. Which three options should the administrator use to address this need? Choose Three answers",
    answer: [
      "Use Validation Rules.",
      "Configure Opportunity Path.",
      "Mark fields required on the page layout."
    ],
    options: [
      "Enable guided selling.",
      "Use Validation Rules.",
      "Configure Opportunity Path.",
      "Use Flow to mark fields required.",
      "Mark fields required on the page layout."
    ],
    nb_good_answer: 3
  },
  
  {
    numb: 89,
    question: "Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing salesforce uses to budget for upcoming license purchases. Where Should the administrator go to find out what type of licenses CK Has purchased and how many are available.",
    answer: ["User Licenses Related List in Company information."],
    options: [
      "Search for license types in setup.",
      "User Licenses Related List in Company information.",
      "User Management settings in setup.",
      "Usage-based entitlement related list in company information."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 90,
    question: "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-Lead form on their website. They want to send different messages based on the Lead Industry Field Value. What Should an administrator configure to meet this requirement?",
    answer: ["Configure an auto-response rule to email the lead."],
    options: [
      "Use Validation rule to trigger workflow to email to Lead.",
      "Configure an auto-response rule to email the lead.",
      "Add a public group and process builder to email the lead.",
      "Create an assignment rule to email the lead."
    ],
    nb_good_answer: 1
  },
  
  
  {
    numb: 91,
    question: "Cloud Kicks has a Customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request? Choose 2 answers",
    answer: [
      "A user with the System Administrator profile.",
      "A user with the Manage Cases Permission."
    ],
    options: [
      "A user with Read Permission on account.",
      "A user with a manager role above the agent.",
      "A user with the System Administrator profile.",
      "A user with the Manage Cases Permission."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 92,
    question: "The marketing director at Northern Trail Outfitters has requested that the budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
    answer: ["Validation Rule"],
    options: ["Lead Conversion.", "Require Field.", "Workflow Rule", "Validation Rule"],
    nb_good_answer: 1
  },
  
  {
    numb: 93,
    question: "The administrators Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted a case to the administrator indication that the new field is unavailable. Which two steps should an administrator do to troubleshoot this issue? Choose 2 answers",
    answer: [
      "Ensure that the page layout for the user's profile has been updated.",
      "Review the field level security of the field for the user profile."
    ],
    options: [
      "Ensure that the page layout for the user's profile has been updated.",
      "Run the setup audit trail for the organization.",
      "Update the organization wide default for the object.",
      "Review the field level security of the field for the user profile."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 94,
    question: "The administrator at Ursa Major Solar has Created a new record type for customer warranty cases. Which two assignments should the administrator use to display the new record type to users? Choose 2 answers",
    answer: ["Profile Assignment", "Page layout Assignment."],
    options: ["Profile Assignment", "Role Assignment.", "App Manager Assignment.", "Page layout Assignment."],
    nb_good_answer: 2
  },
  
  {
    numb: 95,
    question: "A new Sales Rep at Ursa Major has a qualified lead that is ready for conversation. When using the Lead Conversion process, which two records can be Created? Choose 2 answers",
    answer: ["Account", "Contact"],
    options: ["Account", "Campaign", "Case", "Contact"],
    nb_good_answer: 2
  },
  
  {
    numb: 96,
    question: "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working on some of UC's Cases. Which two options should the administrator use to help the support team? Choose 2 answers",
    answer: [
      "Use assignment rules to set the queue as the owner of the case.",
      "Add Cases to the existing queue as an available object."
    ],
    options: [
      "Configure a flow to assign the cases to the queue.",
      "Use assignment rules to set the queue as the owner of the case.",
      "Add Cases to the existing queue as an available object.",
      "Create a new queue and add Cases as an available object."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 97,
    question: "The administrator at AW Computing wants to send off client welcome tasks and a welcome email to the primary contact automatically when an Opportunity is Closed won. What automation tool best accomplishes this?",
    answer: ["Process Builder"],
    options: ["Validation Rule", "Outbound Message", "Approval Process", "Process Builder"],
    nb_good_answer: 1
  },
  
  {
    numb: 98,
    question: "Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow. How should the administrator address these issues?",
    answer: ["Use a fault connector and display a screen with text explaining what went wrong and how to correct it."],
    options: [
      "Remove validation rules so that the users are able to process without complete records.",
      "Create a permission set to allow users to bypass the error.",
      "Use a fault connector and display a screen with text explaining what went wrong and how to correct it.",
      "Uncheck the end user Flow Errors box in setup."
    ],
    nb_good_answer: 1
  },
  {
    numb: 99,
    question: "Cloud Kicks has a custom object named shoe. The administrator has been asked to ensure that when a relationship is created between Account and shoe to prevent orphaned shoe records. What should the administrator do to complete this requirement?",
    answer: ["Create a master-detail lookup."],
    options: [
      "Create an indirect lookup",
      "Create an encrypted lookup",
      "Create a hierarchical lookup",
      "Create a master-detail lookup."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 100,
    question: "Aw Computing needs to capture a loss reason in rich text field when an opportunity is Closed Lost. How should an administrator configure this requirement?",
    answer: ["Create a validation rule to display an error if the stage is Closed lost and Loss Reason is blank."],
    options: [
      "Select the requirement checkbox next to the loss reason field on the page layout.",
      "Create a validation rule to display an error if the stage is Closed lost and Loss Reason is blank.",
      "Check the required checkbox on the Loss Reason field in Object Manager.",
      "Configure a workflow rule to display an error if Loss Reason is blank."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 101,
    question: "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet the requirement?",
    answer: ["Enable Creation of Recurring Tasks."],
    options: [
      "Enable Creation of Recurring Tasks.",
      "Flow to create recurring tasks.",
      "Workflow rule to create recurring tasks.",
      "Turn on Recurring Activities."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 102,
    question: "Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months. How Should the Administrator Address this requirement?",
    answer: ["Set the Fiscal Year to Standard and the starting month as February."],
    options: [
      "Set the Fiscal Year to Custom and the starting month as February.",
      "Set the Fiscal Year to Custom and the duration to 4 quarters.",
      "Set the Fiscal Year to Standard and the starting month as February.",
      "Set the Fiscal Year to Standard and the duration to 12 months."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 103,
    question: "Cloud Kicks has asked the administrator to test a new screen flow that creates contacts. What are two key components of testing the flow? Choose 2 answers",
    answer: [
      "Run the flow using it to create contacts.",
      "Test the flow in a sandbox."
    ],
    options: [
      "Set Up a flow interview to test the flow.",
      "Run the flow using it to create contacts.",
      "Use Debug to test the flow in Flow Builder.",
      "Test the flow in a sandbox."
    ],
    nb_good_answer: 2
  },
  {
    numb: 104,
    question: "An administrator at Universal Containers is reviewing current security settings in the company's Salesforce org. What Should the administrator do to prevent unauthorized access to Salesforce?",
    answer: ["Enable multi-factor authentication"],
    options: [
      "Disable TLS requirements for sessions.",
      "Enable multi-factor authentication",
      "Customize organization-wide default",
      "Enable caching and autocomplete on the login page"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 105,
    question: "An administration needs to store the ID of the record type for later use in a flow. Which kind of variable should the administrator use?",
    answer: ["Text variable"],
    options: [
      "Boolean variable",
      "Text variable",
      "ID variable",
      "Record variable"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 106,
    question: "Universal Containers (UC) would like to count the number of open cases associated with each account and update the account with this value every Friday evening. UC has several hundred open cases at any given time. What should the administrator use to complete this request?",
    answer: ["Use a scheduled flow."],
    options: [
      "Use a record-triggered flow.",
      "Use a scheduled process builder.",
      "Use a Roll-Up summary.",
      "Use a scheduled flow."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 107,
    question: "The business development team at Cloud Kicks thinks the account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process. Which automation tool should an administrator use?",
    answer: ["Flow builder"],
    options: [
      "Approval process",
      "Workflow rule",
      "Flow builder",
      "Validation rule"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 108,
    question: "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
    answer: ["External ID"],
    options: [
      "Auto-Number field?",
      "External ID",
      "Rich text field",
      "Record ID"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 109,
    question: "DreamHouse reality has an approval process. A manager attempts to approve the record but receives an error. What should an administrator review to troubleshoot this request?",
    answer: ["Check if the user in the next approver is inactive or missing"],
    options: [
      "Add a delegated approver for the next approver in the process.",
      "Update the field level security to view on fields that are updated in the process.",
      "Check if the user in the next approver is inactive or missing",
      "Review the page layout to ensure the fields updated in the process are visible."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 110,
    question: "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs. Which two options should the administrator suggest? Choose two answers",
    answer: [
      "Install in a sandbox.",
      "Check edition compatibility"
    ],
    options: [
      "Test Drive in a production org.",
      "Download into a Trailhead Playground.",
      "Install in a sandbox.",
      "Check edition compatibility"
    ],
    nb_good_answer: 2
  },
  {
    numb: 111,
    question: "Which three aspects of standard fields should an administrator customize? Choose 3 answers",
    answer: [
      "Picklist Values",
      "Help Text",
      "Field history tracking"
    ],
    options: [
      "Picklist Values",
      "Help Text",
      "Field history tracking",
      "Decimal Places",
      "Field name"
    ],
    nb_good_answer: 3
  },
  
  {
    numb: 112,
    question: "Which tool should an administrator use to review recent configuration changes made in their org?",
    answer: ["Setup Audit Trail"],
    options: [
      "Critical Updates",
      "Debug logs",
      "Setup Audit Trail",
      "Field History Tracking"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 113,
    question: "Dreamhouse Reality just announced its new home concierge offering. This product is unlike anything the company has offered in the past and follows a different business model. What Should the administrator Configure to meet this requirement?",
    answer: ["Create a new sales process."],
    options: [
      "Create a quick action.",
      "Create a new approval process.",
      "Create a new sales process.",
      "Create a new Opportunity product."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 114,
    question: "The administrator at Ursa Major Solar has been asked to change the work Item and Project Custom Object Relationship from a master detail to a Lookup. Which Scenario Could prevent the administrator from fulfilling this requirement?",
    answer: ["Roll-Up summary field exists on the master object"],
    options: [
      "A junction object is required to support the lookup.",
      "The lookup field in all the records contains a value.",
      "The Look-Up field is required for Saving Records.",
      "Roll-Up summary field exists on the master object"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 115,
    question: "Users at Dreamhouse Reality are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time. How should an administrator create the dashboard without changing any sharing setting?",
    answer: ["Create a dashboard with the running User set as someone who can see all Opportunities"],
    options: [
      "Update the dashboard to folder settings to manager for the sales reps role.",
      "Add a filter to the dashboard to filter the opportunities by owner role.",
      "Build individual dashboards for profiles that need to see the enterprise results.",
      "Create a dashboard with the running User set as someone who can see all Opportunities"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 116,
    question: "An administrator at Dreamhouse Reality needs to Create Customized pages for the Salesforce mobile app. Which two types of pages could an administrator build and customize using the Lightning App Builder? Choose 2 Answers",
    answer: [
      "App page",
      "Record Page"
    ],
    options: [
      "User Page",
      "Dashboard page",
      "App page",
      "Record Page"
    ],
    nb_good_answer: 2
  },
  {
    numb: 117,
    question: "An administrator at Cloud Kicks wants to deactivate a User who has left the company. What are two reasons that would prevent a user from being deactivated? Choose 2 answers",
    answer: [
      "The User is in a Custom hierarchy field.",
      "The User is assigned in workflow email alert."
    ],
    options: [
      "The use is part of a territory hierarchy.",
      "The User is in a Custom hierarchy field.",
      "The User is assigned in workflow email alert.",
      "The User is the highest role in the role hierarchy"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 118,
    question: "An administrator has been asked to change the data type of an auto number to text field. What should the administrator be aware of before changing the field?",
    answer: ["Existing field values will remain unchanged."],
    options: [
      "Existing field values will remain unchanged.",
      "Existing field values will be Converted.",
      "Existing field values will be deleted.",
      "Existing auto number field to Text is prevented."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 119,
    question: "Sales Users at Cloud Kicks are requesting that the data in the industry field on the Account object displays on the Opportunity page layout. Which type of the field should an administrator create to accomplish this?",
    answer: ["Cross Object Formula Field"],
    options: [
      "Custom Account Field",
      "Standard Account Field.",
      "Cross Object Formula Field",
      "Master detail relationship Field"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 120,
    question: "Cloud Kicks want to have consistency when communicating with customers on cases. The company has requested messages to be sent in an email channel with categories to help search for the proper message. Which Solution Should the administrator suggest to meet this requirement?",
    answer: ["Prebuilt Quick Texts"],
    options: [
      "Prebuilt Quick Texts",
      "Prebuilt Email Templates.",
      "Prebuilt Flow Templates.",
      "Prebuilt Auto-Responses."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 121,
    question: "The administrator at Clod Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, They want to reference fields from the associated contact record. What should the administrator do to pull contact fields into the Custom report?",
    answer: ["Edit the custom Event report type and add fields related via lookup."],
    options: [
      "Configure formula fields on event to populate contact information",
      "Edit the custom Event report type and add fields related via lookup.",
      "Create a new report type with event as the primary object and Contact as a related object.",
      "Use a dashboard with filters to show Event and Contact data as requested."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 122,
    question: "Cloud kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages. Which two steps should the administration configure to meet this requirement? Choose 2 answers",
    answer: [
      "Create a Custom Object for shoe design.",
      "Configure a Custom Lookup Field for shoe design on the product object."
    ],
    options: [
      "Create a Custom Object for shoe design.",
      "Configure a Custom Lookup Field for shoe design on the product object.",
      "Add a custom master detail field for shoe design on the Product Object.",
      "Use the Standard Object for designs."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 123,
    question: "The VP of Sales at Cloud Kicks is receiving an error message that prevents them from saving an Opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?",
    answer: ["Log in as the user"],
    options: [
      "Edit the page layout.",
      "View the setup audit trail.",
      "Log in as the user",
      "Review the sharing model"
    ],
    nb_good_answer: 1
  },
  {
    numb: 124,
    question: "Clod Kicks has the organization wide defaults for Opportunity set to private. Which two features should the administrator use to open up access to Opportunity records for sales users working on collaborative deals? Choose 2 answers",
    answer: [
      "Role hierarchy",
      "Sharing rules"
    ],
    options: [
      "Sharing set",
      "Role hierarchy",
      "Profiles",
      "Sharing rules"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 125,
    question: "The administrator at Aw Computing wants Account Details, related list and chatter feeds to each appear on separate tabs when reviewing an account. Which type of page should the administrator create?",
    answer: ["Lightning record page."],
    options: [
      "Lightning app page.",
      "Lightning page Tab.",
      "Lightning record page.",
      "Lightning page Component."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 126,
    question: "When a cloud kicks Opportunity closes, the company would like to automatically create a renewal opportunity. Which two automation tools should an administrator use to accomplish this request? Choose 2 answers",
    answer: [
      "Flow Builder",
      "Process Builder"
    ],
    options: [
      "Approval Process",
      "Flow Builder",
      "WorkFlow Rule",
      "Process Builder"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 127,
    question: "Cloud kicks want to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal. What feature should the administrator use to meet this requirement?",
    answer: ["Splits"],
    options: [
      "Stages",
      "Splits",
      "Queues",
      "List Views"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 128,
    question: "Northern Trail Outfitters has a new flow that automatically sets the field values when a new an account is created. That the flow is launched by a process, But the flow is not working properly. What should the administrator do to identify the problem?",
    answer: ["Use the native debug feature in the flow builder."],
    options: [
      "Use the native debug feature in the flow builder.",
      "Review debug logs with the login level.",
      "View the setup audit Trail and review for errors.",
      "Setup Email logs and review the send error log."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 129,
    question: "The sales manager at cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. What should the administrator use to fulfill the requirement?",
    answer: ["Delegated approver"],
    options: [
      "Delegated approver",
      "Two step Approval process",
      "Approval history related list",
      "Delegated Administrator"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 130,
    question: "Ursa Major Solar offers amazing experiences for all of its employees. The Employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
    answer: ["Chatter Broadcast Group"],
    options: [
      "Chatter Stream.",
      "Chatter Broadcast Group",
      "Chatter Recommendations.",
      "Chatter Unlisted Group"
    ],
    nb_good_answer: 1
  },
  {
    numb: 131,
    question: "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on campaign ROI by month and series. How should the administrator set up the Campaign to simplify reporting?",
    answer: ["Use Campaign Hierarchy where the monthly events roll up to a parent Campaign."],
    options: [
      "Add different record types for the monthly event types.",
      "Create individual Campaigns that all have the same name.",
      "Configure campaign Member Statuses to record which event members attended.",
      "Use Campaign Hierarchy where the monthly events roll up to a parent Campaign."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 132,
    question: "Cloud Kicks has a custom object called Shipments. The Company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Account?",
    answer: ["Shipments should have a lookup to Account."],
    options: [
      "Shipments should have a lookup to Account.",
      "Accounts should have a lookup to Shipments.",
      "Shipments should have a master-detail to Accounts.",
      "Accounts should have a master-detail to Shipments."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 133,
    question: "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled on every Invoice record. How should an administrator ensure this requirement?",
    answer: ["Make the field universally required."],
    options: [
      "Make the field universally required.",
      "Create a Process Builder to set the field.",
      "Define an approval process for the child.",
      "Require the field on the record type."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 134,
    question: "Cloud Kicks has a team of product owners that need a space to share feedback and ideas with just the product team. How should the administrator leverage Salesforce to help the team collaborate?",
    answer: ["Create a Chatter Private Group."],
    options: [
      "Use Quick Actions to log communication.",
      "Configure a Chatter Public Group.",
      "Create a Chatter Private Group.",
      "Add Activity History to document tasks."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 135,
    question: "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
    answer: ["Create and assign a custom profile with delete access removed for each object."],
    options: [
      "Assign the standard System Administrator profile to the analytical user.",
      "Give the user View all access and assign them to the highest role in the role hierarchy.",
      "Create and assign a custom profile with delete access removed for each object.",
      "Create and assign a permission set that includes Read, Create, and Edit access."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 136,
    question: "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
    answer: ["Contact, Lead, and Person Account"],
    options: [
      "Case and Opportunity",
      "Account and User",
      "Contact, Lead, and Person Account",
      "Individual, User, and Account"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 137,
    question: "The administrator for Cloud Kicks needs to give access to a new custom object with custom fields to more than one user. Which two options should an administrator use to meet this requirement? Choose 2 answers",
    answer: ["Assign permission set to Users", "Create a Permission Set"],
    options: [
      "Add to manual sharing list",
      "Assign permission set to Users",
      "Create a Permission Set",
      "Edit organization-wide defaults"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 138,
    question: "Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped, and the user is directed to the second screen. How should the administrator configure the decision element?",
    answer: ["Use the equals operator and {!$GlobalConstant.True} as the value."],
    options: [
      "Use the equals operator and {!$GlobalConstant.True} as the value.",
      "Use the equals operator and “High Value Customer” as the value.",
      "Use the contains operator and {!$GlobalConstant.False} as the value.",
      "Use the contains operator and “High Value Customer” as the value."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 139,
    question: "The administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should be used to undo this import? Choose 2 answers",
    answer: ["Mass Delete Records", "Data Loader"],
    options: [
      "Weekly Data Export",
      "Mass Delete Records",
      "Data Loader",
      "Data Import Wizard"
    ],
    nb_good_answer: 2
  },
  {
    numb: 140,
    question: "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations. Which two tools should an administrator use to build this solution?",
    answer: ["Flow Builder", "Approval Process"],
    options: [
      "Validation Rule",
      "Flow Builder",
      "Approval Process",
      "Quick Action"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 141,
    question: "Northern Trail Outfitters has asked an administrator to ensure that when a contact with a title if a CEO is created, the contact’s account record gets updated with the CEO’s name. Which feature should an administrator use to implement this request?",
    answer: ["Process Builder"],
    options: [
      "Quick Action",
      "Workflow Rule",
      "Process Builder",
      "Validation Rule"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 142,
    question: "New leads need to be routed to the correct Sales person based on the lead address. Which feature should the administrator use to meet this requirement?",
    answer: ["Use lead assignment rule"],
    options: [
      "Configure validation rule",
      "Use lead assignment rule",
      "Create a formula field",
      "Assign with an escalation rule"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 143,
    question: "Users at Universal Containers would like to visually see the sales stages on an Opportunity page. The administrator is configuring a path for Opportunities. Which is an important consideration for path configuration?",
    answer: ["Path can include guidance and key fields for each stage."],
    options: [
      "Kanban views for Path must be configured manually.",
      "The Owner field can be edited in the key fields Panel.",
      "Celebrations are unable to be added to a path.",
      "Path can include guidance and key fields for each stage."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 144,
    question: "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
    answer: ["Security Health Check"],
    options: [
      "Field History Tracking",
      "Setup Audit Trail",
      "Security Health Check",
      "Organization-Wide Defaults"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 145,
    question: "Which two items are available in the mobile navigation menu? Choose 2 answers",
    answer: ["Chatter", "Dashboards"],
    options: [
      "Lightning App Pages",
      "Lightning Home Page",
      "Chatter",
      "Utility Bar",
      "Dashboards"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 146,
    question: "Support agents at Cloud Kicks are spending too much time finding resources to solve cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
    answer: ["Configure Knowledge with articles and data categories."],
    options: [
      "Create a custom object to capture popular case resolutions.",
      "Use an interview flow to capture Case details.",
      "Direct users to Global Search to look for similar cases.",
      "Configure Knowledge with articles and data categories."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 147,
    question: "Dream house realty needs to use consistent picklist values in the category field on accounts and cases, with values respective to record types. Choose 2 options",
    answer: ["Global picklist", "Custom picklist"],
    options: [
      "Multi-select picklist",
      "Dependent picklist",
      "Global picklist",
      "Custom picklist"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 148,
    question: "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than two hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
    answer: ["Case Escalation Rules"],
    options: [
      "Case Escalation Rules",
      "Case Dashboard Refreshes",
      "Case Scheduled Report",
      "Case Assignment Rules"
    ],
    nb_good_answer: 1
  },
  {
    numb: 149,
    question: "An administrator at Universal Container needs an automated way to delete records based on field values. What automated solution should the administrator use?",
    answer: ["Flow Builder"],
    options: ["Workflow", "Process Builder", "Flow Builder", "Automation Studio"],
    nb_good_answer: 1
  },
  
  {
    numb: 150,
    question: "The Human resources department at Northern Trail outfitters wants employees to provide feedback about the manager using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement?",
    answer: ["Uncheck grant access using Hierarchies"],
    options: [
      "Uncheck grant access using Hierarchies",
      "Define criteria-based sharing rules",
      "Set the default external access to private",
      "Configure an owner-based sharing rules"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 151,
    question: "The administrator at cloud kicks has been ask to change the company’s Shoe style field to prevent users from selecting more than one style on a record. Which two steps should an administrator do to accomplish this? Choose 2 answers",
    answer: ["Back-up the Shoe Style values in existing records.", "Change the field type from a multi-select picklist field to a picklist field."],
    options: [
      "Reactivate the appropriate Shoe Style values after the field type changes.",
      "Select the “Choose only one value “checkbox on the pick list field.",
      "Back-up the Shoe Style values in existing records.",
      "Change the field type from a multi-select picklist field to a picklist field."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 152,
    question: "Universal Containers administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-many relationship? Choose 2 answers",
    answer: ["Create a junction with a custom object.", "Create two master detail relationships on the new object."],
    options: [
      "Create a junction with a custom object.",
      "Create two master detail relationships on the new object.",
      "Create two lookup relationships on the new object.",
      "Create URL fields on a custom object."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 153,
    question: "A user at Universal Containers left the company. The administrator needs to create a new user for their replacement, but they have assigned all available users licenses. What should the administrator do to free up users licenses for the new users?",
    answer: ["Deactivate the former employee's user record."],
    options: [
      "Deactivate the former employee's user record.",
      "Delete former employees' user record.",
      "Freeze former employees' user record.",
      "Change the former user's record to the new user."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 154,
    question: "The events manager at dream house realty has a hot lead from a successful open house that needs to become a contact with an associated opportunity. How should this be accomplished from the campaign keeping the associated campaign member history?",
    answer: ["Convert the lead from the campaign member detail page."],
    options: [
      "Delete the lead and create a new contact and opportunity.",
      "Clone the lead and convert the cloned record to a contact.",
      "Convert the lead from the campaign member detail page.",
      "Add a contact from a campaign member detail page."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 155,
    question: "Cloud kicks has the organization-wide sharing default set to private on the shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team. Which 3 items should the administrator configure to provide appropriate access to the report? Choose 3 answers",
    answer: ["Folder access", "Field level security", "Role hierarchy"],
    options: [
      "Custom report type.",
      "Folder access",
      "Report subscription",
      "Field level security",
      "Role hierarchy"
    ],
    nb_good_answer: 3
  },
  {
    numb: 156,
    question: "The sales team at Ursa Major Solar has asked the administrator to automate an outbound message. What should the administrator utilize to satisfy the request?",
    answer: ["Flow builder"],
    options: ["Process builder", "Task assignment", "Workflow rule", "Flow builder"],
    nb_good_answer: 1
  },
  
  {
    numb: 157,
    question: "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet the requirement?",
    answer: ["Path key fields"],
    options: ["Dynamic forms", "Path key fields", "Opportunity processes", "Workflow rules"],
    nb_good_answer: 1
  },
  
  {
    numb: 158,
    question: "Cloud kicks need to ensure appropriate shipping details are used in orders. Reps should have a streamlined solution to update the shipping address on selected orders associated with an account when the shipping address is changed on the account. How should the administrator deliver this requirement?",
    answer: ["A screen flow on the account page that lets the reps choose the updated account shipping address in all open associated orders"],
    options: [
      "An autolaunched flow on the order page that updates all open orders shipping addresses whenever the account shipping addresses changes.",
      "An autolaunched flow on the account page that updates all open orders shipping addresses whenever the account shipping addresses changes.",
      "A screen flow on the order page that lets the reps choose the updated account shipping address in all open associated orders",
      "A screen flow on the account page that lets the reps choose the updated account shipping address in all open associated orders"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 159,
    question: "The administrator at universal containers has a screen flow that helps users create new leads. When the lead source is “Search Engine”, the administrator needs to require the user to choose a specific search engine from a picklist. If the lead source is not “Search Engine”, this picklist should be hidden. How should the administrator complete this requirement?",
    answer: ["Assign a decision element to direct the user to a second screen to hold a specific search engine only when the lead source is “Search Engine”."],
    options: [
      "Assign a decision element to direct the user to a second screen to hold a specific search engine only when the lead source is “Search Engine”.",
      "Use an assignment element, one for when the lead source is “Search Engine” and one for everything else.",
      "Create a picklist for specific search engine, and set conditional visibility so that is only shown when the lead source is “Search Engine”.",
      "Configure a picklist for specific search engine, and use a validation rule to conditionally show only when lead source is “Search Engine”"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 160,
    question: "The administrator at cloud kicks is trying to debug a screen flow that creates contacts. One of the variables in the flow is missing on the debug screen. What could cause this issue?",
    answer: ["The field type is unsupported by debugging."],
    options: ["The available input checkbox was unchecked.", "The flow is an inactive version", "The field type is unsupported by debugging.", "The available output checkbox was unchecked."],
    nb_good_answer: 1
  },
  {
    numb: 161,
    question: "Cloud Kicks executives have noticed the opportunity Expected revenue Field displays incorrect values. How Should the administrator correct this?",
    answer: ["Change the probability associated with the stage."],
    options: [
      "Update the expected revenue associated with the stage.",
      "Adjust the forecast category associated with the stage.",
      "Modify the closed won value associated with the stage.",
      "Change the probability associated with the stage."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 162,
    question: "The administrator at cloud kicks has been told that users are unable to add repeating tasks in salesforce. Which two solutions the administrator uses to ensure users are able to do this?",
    answer: ["Enable creation of Recurring Tasks in Activity Settings", "Add create Recurring series of Tasks field on Page Layouts"],
    options: [
      "Enable creation of Recurring Tasks in Activity Settings",
      "Disable shared Activities.",
      "Add create Recurring series of Tasks field on Page Layouts",
      "Turn on Task Notifications service."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 163,
    question: "An administrator at Northern Trail Outfitters is unable to add a new user in salesforce. What could cause this issue?",
    answer: ["The Username is already in use."],
    options: [
      "The Username is not a corporate email address",
      "The username is less than 80 characters.",
      "The Username is a fake email address.",
      "The Username is already in use."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 164,
    question: "The DreamHouse Realty team has a master-detail relationship set up with open house as the parent object and visitors as the child object. What type of field should the administrator add to the open house object to track the number of visitors?",
    answer: ["Roll-up Summary"],
    options: ["Roll-up Summary", "Multi-select Picklist", "Cross-object formula", "Indirect lookup"],
    nb_good_answer: 1
  },
  
  {
    numb: 165,
    question: "The administrator at Cloud kicks deleted a custom field but realized there is a business unit that still uses the field. What should an administrator take into consideration when undeleting the field?",
    answer: ["The field history will remain deleted."],
    options: [
      "The field needs to be re-added to reports.",
      "The field history will remain deleted.",
      "The field needs to be restored from the recycle bin.",
      "The field needs to be re-added to page Layouts."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 166,
    question: "An administrator needs to create a one-to-many relationship between two objects with limited access to child records. What type of field should the administrator use?",
    answer: ["Master-detail field"],
    options: ["Roll-up summary", "Master-detail field", "Cross Object formula", "Lookup field"],
    nb_good_answer: 1
  },
  
  {
    numb: 167,
    question: "Northern trail Outfitter wants to use contact hierarchy in its or to display contact association. What should the administrator take into consideration regarding the contact hierarchy?",
    answer: ["Sharing settings are ignored by contacts displayed in the Contact Hierarchy."],
    options: [
      "Contacts displays in the contact hierarchy are limited to record-level access by User.",
      "Contact Hierarchy is limited to only 3,000 contacts at one time.",
      "Customizing hierarchy columns changes the recently viewed Contacts list view.",
      "Sharing settings are ignored by contacts displayed in the Contact Hierarchy."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 168,
    question: "The administrator at Ursa Major Solar has created a custom report type and built a report for the sales operation team. However, none of the users are able to access the report. Which two options could cause this issue?",
    answer: ["The custom report type is in development.", "The report is saved in a private folder."],
    options: [
      "The custom report type is in development.",
      "The user’s profile is missing view access.",
      "The org has reached its limit of custom report types.",
      "The report is saved in a private folder."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 169,
    question: "Sales raps at Ursa Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator do and close more deals.",
    answer: ["Einstein Opportunity Scoring"],
    options: ["Einstein Lead Scoring", "Einstein Search Personalization", "Einstein Activity Capture", "Einstein Opportunity Scoring"],
    nb_good_answer: 1
  },
  
  {
    numb: 170,
    question: "The administrator for AW Computing is working with a user who is having trouble logging in to salesforce. What should the administrator do to identify why the user is unable to login?",
    answer: ["Review the Login history."],
    options: [
      "Review the Security token.",
      "Review the password history.",
      "Review the Password policies.",
      "Review the Login history."
    ],
    nb_good_answer: 1
  },
  {
    numb: 171,
    question: "Once an opportunity reaches the negotiation stage at cloud kicks, The Amount fields become required for sales users. Sales managers need to be able to move opportunities into this stage without knowing the amount. How should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?",
    answer: ["Configure a validation rule to meet the criteria."],
    options: [
      "Make the field required for all users.",
      "Create a formula field to fill in the field for managers.",
      "Assign the administrator profile to the managers.",
      "Configure a validation rule to meet the criteria."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 172,
    question: "Northern Trail outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads. What approach should an administrator take to meet this requirement?",
    answer: ["Define a record type and assign it to the interns."],
    options: [
      "Set up Web-to-Lead form the interns use.",
      "Define a record type and assign it to the interns.",
      "Create a separate Lead Lightning App.",
      "Update the active Lead Assignment Rules."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 173,
    question: "The Cloud kicks sales manager wants to boost productivity by providing insights at the start of each day. Which three sales-specific standard Lightning components should the administrator add to the homepage to meet this requirement?",
    answer: ["Activities", "Key Deals", "Assistant"],
    options: [
      "Activities",
      "Path",
      "Assistant",
      "Key Deals",
      "Performance chart"
    ],
    nb_good_answer: 3
  },
  
  {
    numb: 174,
    question: "What are three settings an administrator should configure to make it easy for approvers to respond to approval requests? Choose 3 Answers.",
    answer: [
      "Update the organization's chatter setting to allow approvals.",
      "Enable the organization's Email approval response setting.",
      "Add the Items to approve components to the approvers home page."
    ],
    options: [
      "Update the organization's chatter setting to allow approvals.",
      "Enable the organization's Email approval response setting.",
      "Specify initial submission actions within the approval process.",
      "Add the Items to approve components to the approvers home page.",
      "Create a flow to automatically approve all records."
    ],
    nb_good_answer: 3
  },
  
  {
    numb: 175,
    question: "New Leads need to be routed to the correct sales person based on the lead address. How should the administrator configure this requirement?",
    answer: ["Use lead assignment rules."],
    options: [
      "Create a formula field.",
      "Use lead assignment rules.",
      "Assign with an escalation rule.",
      "Configure a validation rule."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 176,
    question: "An Administrator at DreamHouse Realty wants an easier way to assign an agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
    answer: ["Omni-Channel"],
    options: [
      "Knowledge Management.",
      "Omni-Channel",
      "Escalation Rules",
      "Territory Management."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 177,
    question: "Universal container has a contact Lightning record Page with a component that shows LinkedIn data. The sales team would like to only show this component to sales users when they are on their mobile phones. Choose 2 Answers.",
    answer: ["Filter the component visibility with User > Profile > name = sales User", "Filter the component visibility with Form Factor = phone"],
    options: [
      "Filter the component visibility with User > Profile > name = sales User",
      "Filter the component visibility with Form Factor = phone",
      "Filter the component visibility with view = Mobile/Tablet.",
      "Filter the component visibility with User > Role > Name = Sales User."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 178,
    question: "At cloud kicks sales reps use discounts on the opportunity record to help win sales on products. When an opportunity is won, they then have to manually apply the discount on the related opportunity products. The sales manager has asked if there is a way to automate this time consuming task. What should the administrator use to deliver this requirement?",
    answer: ["Flow Builder"],
    options: [
      "Flow Builder",
      "Approval Process",
      "PreBuilt Macro.",
      "Formula field"
    ],
    nb_good_answer: 1
  },
  {
    numb: 179,
    question: "Dreamhouse Realty agents are double-booking open house event nights. The event manager wants an event submission process to help agents fill in event details and request dates. How should an administrator accomplish the request?",
    answer: ["Create a campaign for agents to request event dates."],
    options: [
      "Create a workflow role to update the Event Date Field.",
      "Create an approval process on the Campaign object.",
      "Create a sharing rule so that other agents can view events.",
      "Create a campaign for agents to request event dates."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 180,
    question: "Cloud kicks intends to protect with backups by using the data by using the data export Service. Which two considerations should the administrator remember when Scheduling the export? Choose 2 Answers.",
    answer: [
      "Metadata Backups are limited to sandbox refresh intervals.",
      "Data Backups are limited to weekly or monthly intervals."
    ],
    options: [
      "Metadata Backups are limited to sandbox refresh intervals.",
      "Data Backups are limited to weekly or monthly intervals.",
      "Data export service should be run from a sandbox.",
      "Metadata backups must be run via a separate process."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 181,
    question: "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
    answer: ["Escalation Rule"],
    options: [
      "Auto - Response Rules",
      "Validation Rule",
      "Escalation Rule",
      "Assignment Rule"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 182,
    question: "The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to ‘Audited’, they would like the system to automatically update the Audited date field on the account with today’s date. Which tool should the administrator use to complete this automation?",
    answer: ["Flow Builder"],
    options: [
      "Approval process",
      "Formula Field",
      "Flow Builder",
      "Validation Rule"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 183,
    question: "Aw computing wants to prevent users from updating the Account Annual Revenue field to be a negative value or an amount more than $100 billion. How should an administrator accomplish this request?",
    answer: ["Create a validation rule that displays an error if Account revenue is below 0 or greater than 100 billion."],
    options: [
      "Create a validation rule that displays an error if Account revenue is below 0 or greater than 100 billion.",
      "Build a scheduled report displaying Account with Account revenue that is negative or greater than 100 billion.",
      "Make the Account Revenue field required on the page layout.",
      "Enable the Account Revenue limits in setup, with 0 as minimum and 100 billion as maximum."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 184,
    question: "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year. Which AppExchange item should help the administrator to meet the request?",
    answer: ["Flow Solutions"],
    options: [
      "Lightning Data",
      "Lightning Community",
      "Flow Solutions",
      "Bolt Solutions"
    ],
    nb_good_answer: 1
  },
  {
    numb: 185,
    question: "The Call center manager in Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status and owner. What should an Administrator add to the dashboard to fulfil the request?",
    answer: ["Dashboard Filter"],
    options: [
      "Dashboard Filter",
      "Bucket column",
      "Dashboard component",
      "Combination Chart"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 186,
    question: "Universal Container wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find the deal records via a search. What options should the administrator adjust to fully restrict access?",
    answer: ["Page layouts and field- level security"],
    options: [
      "Record setting and search index",
      "Permissions and tab visibility",
      "App permissions and search terms",
      "Page layouts and field- level security"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 187,
    question: "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and wants to share all cross-sell opportunities with a team of subject matter experts in their organization. The company has different roles, and the organization wide default opportunity is set to private. How should the administrator accomplish this?",
    answer: ["Add the subject matter experts to a public group and give them access to records with a criteria-based sharing rule."],
    options: [
      "Add the subject matter experts to a public group and give them access to records with a criteria-based sharing rule.",
      "Change the organization-wide default for opportunity from private to public Read/Write to open up access for subject matter experts.",
      "Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing.",
      "Create a new role for the subject matter experts and give them access to the records with the owner-based sharing rule."
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 188,
    question: "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the questions that are needed. How should an administrator complete this?",
    answer: ["Use a conditional visibility to hide the unnecessary question"],
    options: [
      "Use a new version of the flow for each scenario.",
      "Use a decision element and a new screen to show the proper question",
      "Use a conditional visibility to hide the unnecessary question",
      "Use branching in the flow screen to show the proper scenario"
    ],
    nb_good_answer: 1
  },
  
  {
    numb: 189,
    question: "AW Computing would like to improve its Case Lightning record page by including: • A filtered component to display a message in bold font when a case is saved as a critical record type. • A quick way to update the account status from the case layout. Which two components should an administrator use to satisfy these requests?",
    answer: ["Related Record", "Rich text"],
    options: [
      "Related List",
      "Related Record",
      "Record details",
      "Rich text"
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 190,
    question: "The Administrator at Universal Container wants to add branding to salesforce. Which two considerations should the administrator keep in mind?",
    answer: [
      "Only one theme can be active at a time, and a theme applies to the entire org.",
      "Chatter external users see the built-in Lightning theme only."
    ],
    options: [
      "Only one theme can be active at a time, and a theme applies to the entire org.",
      "Themes apply to salesforce classic and to the salesforce mobile app.",
      "Up to 150 custom themes can be created, modified, or cloned from the built-in themes.",
      "Chatter external users see the built-in Lightning theme only."
    ],
    nb_good_answer: 2
  },
  
  {
    numb: 191,
    question: "The Administrator at Cloud Kicks needs to automatically route support cases, regardless of how they are created, to a queue based on case priority. What tool should the administrator use?",
    answer: ["Assignment Rules"],
    options: [
      "Email-to-Case",
      "Assignment Rules",
      "Auto-Response Rules",
      "Web-to-case"
    ],
    nb_good_answer: 1
  }
];
