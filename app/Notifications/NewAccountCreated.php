<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewAccountCreated extends Notification
{
    protected $user, $password, $request;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user, $password, $request = null)
    {
        $this->user = $user;
        $this->password = $password;
        $this->request = $request;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $firstName = $this->request['first_name'];
        $lastName = $this->request['last_name'];
        $email = $this->user->email;
        $password = $this->password;
        return (new MailMessage)
            ->greeting("Hello! {$firstName} {$lastName}")
            ->subject('Staff Acccount')
            ->line('Please your staff account has been created, you can sign in with the below credentials.')
            ->line("Username :: {$email}")
            ->line("Password :: {$password}")
            ->action('Sign in', url('/'));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
