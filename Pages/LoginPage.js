import { expect } from "@playwright/test";

export default class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('User Name')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Log In' })
    }

    // Actions
    async gotoLoginPage() {
        // await this.page.pause()
        await this.page.goto('https://ws.connectedbusiness.com/EnticeStudioCRM/entice_test/')
        await this.login_button.waitFor({
            state: "visible"
        })
    }

    async login() {
        // await this.page.pause()
        await this.username_textbox.fill('admin')
        await this.password_textbox.fill('admin')
        await this.login_button.click()

        // this.page.on('dialog', async dialog => {
        //     expect(dialog.message()).toBe('Login failed');
        // });
    }

}


