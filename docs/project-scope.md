# Project Scope

This is a project to mimic a feature of Vetster's website, the Pet Food Advisor. It's a simple feature that helps pet owners to choose the best food for their pets.

## Why this feature?

As a pet owner, I know that the food that I give to my dog is very important for her health, it's directly related to her quality of life. Recently I got in two situations that made me change Lola's food brand. First, when we moved to Canada, since the food brand that she used to eat in Brazil is not available here. Second when the veterinarian told me that she was overweight and I had to change her food to a low calorie one. Other than that, it was difficult to understand how many calories she should eat per day, and how much food I should give her.

As a platform, Vetster has two main publics: pet owners and veterinarians. I choosed to focus on pet owners, as it's my public and I know their needs.

The Pet Food Advisor feature would help parents to choose the best food for their pets and give them the possibility to buy it directly from Vetster's website through a subscription plan. The most important, brands that are recommended and trusted by Vetster's veterinarians. It would also help pet owners to understand how much food they should give to their pets, based on the animal's caracteristics, like age, weight, breed and health conditions.

## Business Impact

If this feature would be implemented in Vetster's website, **I believe it would interfere in the three main KPIs of the company: Net Promoter Score (NPS), Customer Satisfaction (CSAT) and Revenue.**
I don't believe this feature would have a direct impact in the number of consultations or new customers, but it would help to increase the number of returning customers, as they would trust the brand and the veterinarians more.

### Net Promoter Score (NPS) and Customer Satisfaction (CSAT)

NPS is a metric used to measure customer loyalty while CSAT is used to measure customer satisfaction. Both are important metrics to measure the customer experience and the company's reputation.

I believe this feature would help to increase the NPS and CSAT, as it would help pet owners to trust the brand and the veterinarians more, elevating the company's reputation and the times that the customers come back to the platform or see the Vetster's brand whenever the food is delivered in their houses.

### Revenue

Cash flow is one of the most important aspects of a business. This feature would help to increase the amount of recurrent revenue, through the subscription plan, and also the amount of revenue per customer.

There are two ways to implement the operation of this feature: Vetster could have a partnership with a pet food company, or they could sell the food directly to the customers. In both cases, Vetster would receive a percentage of the revenue.

An important aspect of this operation is keep the stock as short as possible, even if pet's food is not a product that expires quickly, but it's a product that takes a lot of space and specific storage conditions. So a partnership with a pet food company would be the best option.

::: info
As I don't have access to Vetster's data, or any kind of business information,this is only an assumption exercise based on my experience as a pet owner and my knowledge as a software engineer and Program Manager.
:::

## Technology Stack

### Frontend

I choosed Vue3 as it's the technology used in Vetster web product. As I always had curiosity to learn it, this was a great opportunity to check this technology. I followed the Vue guidelines and used other Vue ecosystem tools as Vue Router, Vite, Pinia, VitePress to keep project consistency.

For styling I installed TailwindCSS because after some time inspecting Vetster's website, even tought I discovered further that they use Tailwind UI, which provide pre-built components, and it is paid.
I didn't use Tailwind much. I've worked many years with Bootstrap, which have the same Tailwind's concept (style trhough css pre-built classes), and I believe it cabn led in a verbose code, so I prefered to use SASS for styling.

- Vue3: Frontend Framework
- Vue Router: Routing
- Vite: Build Tool
- Pinia: Global State Management
- VitePress: Documentation
- TailwindCSS: Styling
- Heroicons: Icons
- Firebase: Hosting

::: info
I've tried to follow the same Vetster's website guidelines as data patterns, colors, fonts, icons and images.

As they used Tailwind UI, I've tried my best to mimic the components without spending too much time on it as the objective of this project is to show the feature itself and not the base website components copy. But I also believe that a good UI is important to the user experience, so I tried to make it as good as possible.
:::
