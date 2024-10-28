# NX BUG REPORT

Webstorm NX Console Plugin does not wokring in yarn pnp

## ENVIRONMENT

- OS : windows 10
- Webstorm : Build #WS-242.23726.96, built on October 22, 2024
- Node : v22.9.0
- NX Console : 1.32.4
- Yarn : 4.5.1

## REPRODUCTION

1. clone git repository
    ```bash
   git clone https://github.com/ChoSeoHwan/nx-bug-report.git
   ```
   
2. yarn install
   ```bash
   yarn install
   ```

3. enable nx console plugin in webstorm
![img.png](images/img.png)

4. Click "REFRESH WORKSPACE" button
- stuck in loading

![img.png](images/img2.png)


## Expected Behavior

Running the NX Console plugin with Yarn PnP without issues.
