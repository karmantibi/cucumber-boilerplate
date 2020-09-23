@api
Feature: Test feature

Scenario: Test scenario
When send a GET request to "http://dummy.restapiexample.com/api/v1/employees"
Then the last item of response list should contains 24 item

#Scenario: Second scenario
#Given Failed step