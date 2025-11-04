Using a Service for Cross-Component Communication
Using a Service for Cross-Component Communication
How could we use a service in this application to improve it? Currently, the AppComponent derives the investment results. This means data must be passed up from the UserInputComponent through a custom event, via an output, to the AppComponent. Then, it must be passed down to the InvestmentResults component through an input from the AppComponent.

There is nothing wrong with this approach, but it requires extra code for both the output and input. Both could be avoided if we used a service. Therefore, that is what we will do now.

I will add a service, maybe next to the AppComponent. The exact position is not too important here. I will name it InvestmentService, so the file is named investment.service.ts. In there, as you learned, we can and should export a class called InvestmentService, which should be decorated with the @Injectable decorator imported from @angular/core. To that decorator, you pass a configuration object where you set providedIn to root. This ensures Angular can inject that service and components can request it to be injected.

Inside this service, I want to gather the data entered by the user and derive those results. We could take the code from our AppComponent's onCalculateInvestmentResults method, cut it out, remove it from the AppComponent, and add it to the InvestmentService. I will rename it to calculateInvestmentResults since it will no longer be directly bound to a custom event. That is just a naming change.

I still want to use the custom InvestmentInput data type, which is imported from the model file. We must also ensure that we store the results data either with a signal or with a regular property. I will show both approaches.

Let's start by not using a signal but instead a regular property. We can add a property to the InvestmentService named resultData, just as before. We should also go back to the AppComponent and grab this data type. Now, we can remove the resultsData signal and all related imports from the AppComponent, making the file much leaner.

In the InvestmentService, we set the type of resultData to the custom type, but it can initially be undefined, hence the question mark. In the calculateInvestmentResults method, we set this.resultData to the annualData derived in the calculation. This way, the service holds the calculation method and the result property.

Now, we should use this InvestmentService in the files that need to interact with it, for example, in the user-input.component.ts file. Instead of setting up an output, which should be removed along with its import, we can and should reach out to the service in the onSubmit method.

To do this, we must make the service available by injecting it via the constructor. We add a parameter, for example, investmentService, and set its type to InvestmentService. We must import the service class from investment.service.ts. This syntax tells Angular to inject an instance of the InvestmentService as the value for this parameter in the constructor.

Since we need access to the injected service in the onSubmit method, we store this parameter in a property of the class. We can do this easily by adding the private keyword in front of the parameter, which creates a new property with that name in the component. We use private because we do not need to access the service anywhere else, such as in the template.

With that, a property named investmentService is created and added to the class, holding the service instance. In onSubmit, we use this property to call calculateInvestmentResults, passing the data object. We remove the previous calculate.emit call. This triggers the service method when the form is submitted from inside the UserInputComponent.

We are interested in the calculation result stored in resultData in the investment-results.component.ts file. We should remove the input and its import from this component. Instead, we inject the same InvestmentService instance here to access the results.

We can inject the service instance using the constructor or by using Angular's inject function. To use inject, we add a property with any name and assign it the result of calling inject with the service class. We must import both inject and the service class for this to work. This makes the service available in the component.

To expose the results to the template, we add a getter called results that returns this.investmentService.resultData. This exposes the result data from the service through the getter to the component's template.

In the investment-results.component.html file, results is no longer a signal, so we remove the parentheses. Other than that, it works as before.

Finally, in the AppComponent template, we remove the event binding from app-user-input since it no longer emits the calculate event. We also remove the results binding from app-investment-results since it no longer accepts an input. With these changes, the application is leaner and the components have less code.

If you save and reload the application, entering some input and clicking CALCULATE will show the same kind of results as before. However, now the results are generated and sent between components using the service. This leads to a leaner AppComponent and less code in both the UserInput and InvestmentResults components.

Key Takeaways
Using a service for cross-component communication reduces the need for input/output bindings.
The InvestmentService centralizes investment calculation logic and result storage.
Components inject the service to access shared data and methods, promoting cleaner code.
Removing event emitters and inputs leads to a leaner and more maintainable component structure.
