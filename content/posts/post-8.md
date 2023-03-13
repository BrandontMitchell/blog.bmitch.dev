---
title: "Secure Coding Practices in Preventing Web App Vulnerabilities"
description: "Web App Security."
date: 2023-03-13T05:00:00Z
image: "/images/posts/01.jpg"
categories: ["career", "tech", "code", "reversing", "hacking"]
authors: ["Brandon"]
tags: ["career", "ceo", "tech", "software", "determination"]
draft: false
---

## Introduction
Web application vulnerabilities are weaknesses in the code of a web application that can be exploited by attackers to gain unauthorized access, steal sensitive data, or perform other malicious actions. These vulnerabilities can have serious consequences, including financial losses, damage to a company's reputation, and legal liabilities. It is therefore essential for businesses and organizations to take steps to prevent web application vulnerabilities.
There will always be an ongoing battle between attackers and users / companies with web apps. Attackers arguably have the upper hand in this battle, as the reward is deemed more valuable in there eyes. Attackers are often hired by companies to test their systems, offered bounties in the case they find an exploit, or sometimes they are not interested in payment, but user information or data dumps. 

## Examples of Common Web App Vulnerabilities
I will not be able to cover all the web app vulnerabilities in this section, but I will describe some very common examples of what could be considered a vulnerability in a web app. 
### SQL Injection: 
This occurs when an attacker is able to insert malicious code into a web application's database through a vulnerable input field. This can allow the attacker to access sensitive information or make unauthorized changes to the database.
Retrieving hidden data: modifying a SQL query to obtain or return additional results.

Let's imagine we have a website https://example-website.com/products?type=clothes. This is the url we see when we visit the product page and sort by clothes.  An attacker's mind wonders what data source this query targets. We can assume this may utilize SQL, which would lead to a query such as:

```
SELECT * FROM products WHERE type = 'clothes' AND isActive = 1
```

Assuming our thought process is correct, we can modify the query to display more / different information:

```
https://example-website.com/products?type=clothes'--
Which translates to:
SELECT * FROM products WHERE type = 'clothes'-- AND isActive = 1
```

This result will now return all products even if some have been deactivated. This is just an example of how you can retrieve hidden information, meaning it could apply to other tables in storage (assuming limited user input validation, etc. ). 

### Subverting application logic: 
Similar to the hidden data sql injection, we can subvert the logic to return sensitive data. Imagine you log in with user / pass, which results in a query to validate the credentials match for that user. We can assume there is a master account or admin account, and attempt to retrieve those credentials.
Retrieving data from other tables: An attacker can leverage a range of additional SQL commands such as Unions, to execute addition SELECT queries and append those results to the original query. 
Examining the database: It is sometimes useful for an attacker to understand the database itself, which can sometimes unlock additional vulnerabilities in the event the version has known exploits, etc. 
SELECT * FROM information_schema.tables is a commmon query which will display which tables exist in the database.
How to detect SQL Injection Vulnerabilities
Utilizing a tool such as Burp Suite's https://portswigger.net/burp/vulnerability-scanner
Testing entry points of an app (input fields, query parameters)
Submitting the single quote character ' and looking for errors or other anomalies.
Submitting some SQL-specific syntax that evaluates to the base (original) value of the entry point, and to a different value, and looking for systematic differences in the resulting application responses.
Submitting Boolean conditions such as OR 1=1 and OR 1=2, and looking for differences in the application's responses.
Submitting payloads designed to trigger time delays when executed within an SQL query, and looking for differences in the time taken to respond.
Submitting OAST payloads designed to trigger an out-of-band network interaction when executed within an SQL query, and monitoring for any resulting interactions.


*Cross-site scripting (XSS)* : This type of vulnerability allows an attacker to inject malicious code into a web application, which is then executed by other users when they visit the site. This can be used to steal sensitive information or perform other malicious actions.

*Cross-site request forgery (CSRF)* : This vulnerability occurs when an attacker is able to trick a user into making an unintended request to a web application, such as changing their password or transferring funds.

## How to Secure Web Applications
Input validation: It is important to validate user input to ensure that it is in the correct format and does not contain any malicious code.
Escaping user input: When displaying user input on a web page, it is essential to properly escape any special characters to prevent cross-site scripting attacks.
Proper error handling: Properly handling and logging errors can help to prevent attackers from exploiting vulnerabilities in a web application.
Using secure frameworks and libraries: Using secure frameworks and libraries can help to prevent vulnerabilities by providing secure functions and tools for common tasks.
Ensuring secure communication: Using secure protocols such as HTTPS can help to prevent attackers from intercepting sensitive information during communication between a web application and a user.

## Conclusion
In summary, web application vulnerabilities can have serious consequences for businesses and organizations. By following secure coding practices, developers can help to prevent these vulnerabilities and protect sensitive data and systems. It is important for developers to stay up-to-date on best practices and continue to educate themselves on web application security.



### References
https://portswigger.net/web-security/sql-injection
