<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SendMailAccountCreated extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sendMail:newAccount';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email to newly created account.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('is working');
    }
}
