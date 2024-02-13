from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
cService = webdriver.EdgeService(executable_path='/Users/koenkk/Downloads/msedgedriver')
driver = webdriver.Edge(service = cService)
# driver.implicitly_wait(300)
# driver = webdriver.Edge(executable_path='/Users/koenkk/Downloads/msedgedriver')
driver.get("https://new.express.adobe.com/tools/remove-background")

time.sleep(2)
k  = driver.find_element(By.ID, "onetrust-accept-btn-handler")
k.click()
# time.sleep(5)
# time.sleep(2)

print('lkjasdf')

for k in driver.find_elements(By.XPATH, '//h4'):
    k.click()
# print(content)
# loginBtn.click()
# k = driver.find_element(By.CLASS_NAME, ".dropzone")
# k.click()
time.sleep(10)