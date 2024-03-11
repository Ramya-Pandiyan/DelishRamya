<?php
include('db_config.php');

// Initialize session
session_start();

// Initialize errors array
$errors = array();

// Sign Up
if (isset($_POST['signup'])) {
    // Get user input
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password for security

    // Insert user data into the database
    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->execute([$name, $email, $password]);

    // Redirect to explore recipes page
    header('location: explore_recipes.php');
    exit;
}

// Sign In
if (isset($_POST['signin'])) {
    // Get user input
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Retrieve user data from the database
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $db->prepare($sql);
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // Authentication successful, redirect to explore recipes page
        header('location: explore_recipes.php');
        exit;
    } else {
        $errors[] = "Invalid email/password combination";
    }
}
?>
